const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = {
  id: {
    unique: true,
    type: String,
    index: true,
  },
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: 0,
  },
};

const taskSchema = new Schema(schema);

const Task = mongoose.model('Tasks', taskSchema);

module.exports = {
  Task,
  schema,
};
