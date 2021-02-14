const SequelizeSlugify = require("sequelize-slugify");
const Tasks = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isDate: true },
      },
      name: { type: DataTypes.STRING, allowNull: false },
      //description: { type: DataTypes.STRING },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "HIGH",
        validate: {},
      },
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    { timestamps: false }
  );
  SequelizeSlugify.slugifyModel(Task, {
    source: ["name"],
  });
  return Task;
};
module.exports = Tasks;
