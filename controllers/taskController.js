const { Task } = require("../db/models");

exports.fetchTask = async (taskId, next) => {
  try {
    const found = await Task.findByPk(taskId);
    return found;
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.removeTask = async (req, res, next) => {
  const { taskId } = req.params;

  try {
    await req.whatever.destroy();
    res.status(204);
    res.end();
  } catch (error) {
    next(error);
  }
};

exports.newTask = async (req, res, next) => {
  console.log(req.body);
  try {
    const newTask = await Task.create(req.body);
    res.status(201);
    res.json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    req.whatever.update(req.body);
    res.status(204);
    res.end();
  } catch (error) {
    next(error);
  }
};
