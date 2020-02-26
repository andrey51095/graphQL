const mongoose = require('mongoose');

const {STATUSES} = require('../../constants');

const Schema = mongoose.Schema;

const schema = {
  name: String,
  columns: {
    type: [String],
    enum: STATUSES,
  },
  counter: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
};

const boardSchema = new Schema(schema);

const Board = mongoose.model('Boards', boardSchema);

module.exports = {
  Board,
  schema,
};
