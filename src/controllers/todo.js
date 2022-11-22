const todoService = require('../services/todoService');

class todo_ctrl {
  async CREATE(req, res) {
    const todoDetails = req.body;
    const newTodo = await todoService.CREATE(todoDetails);
    res.status(201).send(newTodo);
  }

  async GET_ALL(req, res) {
    const allTodo = await todoService.GET_ALL();
    res.status(302).send(allTodo);
  }

  async GET_BY_ID(req, res) {
    const todoId = req.params.id;
    const newTodo = await todoService.GET_BY_ID(todoId);
    res.status(302).send(newTodo);
  }

  async UPDATE(req, res) {
    const todoId = req.params.id;
    const data = req.body;
    const updateData = await todoService.UPDATE(todoId, data);
    res.status(200).send(updateData);
  }

  async DELETE(req, res) {
    const todoId = req.params.id;
    const newTodo = await todoService.DELETE(todoId);
    res.status(200).send(newTodo);
  }
}

module.exports = new todo_ctrl();
