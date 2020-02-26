const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = {
  name: String,
  board: String,
  beforeBoard: String,
  afterBoard: {
    type: String,
    default: null,
  },
};

const columnSchema = new Schema(schema);

const Column = mongoose.model('Columns', columnSchema);

module.exports = {
  Column,
  schema,
};
