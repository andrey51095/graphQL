const mongoose = require('mongoose');

const {STATUSES} = require('../../constants');

const Schema = mongoose.Schema;

const schema = {
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
    default: 'backlog',
    enum: STATUSES,
  },
  name: String,
  rankBeforeId: String,
  rankAfterId: {
    type: String,
    default: null,
  },
};

const taskSchema = new Schema(schema);

const Task = mongoose.model('Tasks', taskSchema);

module.exports = {
  Task,
  schema,
};
