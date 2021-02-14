const express = require("express");
const router = express.Router();

const {
  list,
  updateTask,
  removeTask,
  newTask,
  fetchTask,
} = require("../controllers/taskController");

router.param("taskId", async (req, res, next, taskId) => {
  const task = await fetchTask(taskId, next);
  if (task) {
    req.whatever = task;
    next();
  } else {
    next({ status: 404, message: "task not found" });
  }
});

router.get("/", list);

router.post("/", newTask);

router.delete("/:taskId", removeTask);

router.put("/:taskId", updateTask);

module.exports = router;
