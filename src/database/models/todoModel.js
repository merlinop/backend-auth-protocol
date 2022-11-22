const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Todo title is required'],
      unique: true,
    },

    post: String,

    done: { type: Boolean, required: true, default: false },
  },
  { collection: 'todos', timestamps: true }
);

const TodoModel = mongoose.model('todos', todoSchema);

module.exports = TodoModel;
