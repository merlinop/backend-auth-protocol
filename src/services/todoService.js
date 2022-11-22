const TodoModel = require('../database/models/todoModel');

class todo_service {
  async CREATE(todoDetails) {
    const newTodo = await TodoModel.create(todoDetails);
    return newTodo;
  }

  async GET_ALL() {
    const allTodos = await TodoModel.find({});
    return allTodos;
  }

  async GET_BY_ID(todoId) {
    const singleTodo = await TodoModel.find({ _id: todoId });
    return singleTodo;
  }

  async UPDATE(todoId, updateData) {
    const updatedTodo = await TodoModel.findOneAndUpdate(
      { _id: todoId },
      { $set: updateData },
      { new: true }
    );
    return updatedTodo;
  }

  async DELETE(todoId) {
    const deletedTodo = await TodoModel.findOneAndDelete({ _id: todoId });
    return deletedTodo;
  }
}

module.exports = new todo_service();
