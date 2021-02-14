const express = require("express");
const cors = require("cors");

const routes = require("./routes/tasks");
const db = require("./db/models");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/tasks", routes);

app.use((req, res, next) => {
  next({ status: 404, message: "path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: { message: "internal server error" || error.message } });
});

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
