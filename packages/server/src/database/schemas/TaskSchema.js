const mongoose = require('mongoose');
const shortid = require('shortid');

const {TASK_STATUSES} = require('../../constants');

const Schema = mongoose.Schema;

const schema = {
  id: {
    type: String,
    default: shortid.generate
  },
  title: String,
  description: String,
  createdAt: {
    type: Number,
    default: Date.now,
  },
  updatedAt: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: 'open',
    enum: TASK_STATUSES,
  }
};

const taskSchema = new Schema(schema);

const Task = mongoose.model('Tasks', taskSchema);

module.exports = {
  Task,
  schema,
};
