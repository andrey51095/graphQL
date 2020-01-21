const {TASK_STATUSES} = require('../../constants');

const getTasks = async (parent, args, context, info) => {
  const {Task} = context.schemas;
  const tasks = await Task.find({});
  return tasks;
};

const task = async (parent, args, context, info) => {
  const {id} = args;
  const {Task} = context.schemas;

  const answer = await Task.findOne({id});
  return answer;
}

const tasksByStatus = async (parent, args, context, info) => {
  const {status} = args;
  const {Task} = context.schemas;

  const tasks = await Task.find({status});

  return tasks;
};

const taskStatuses = () => TASK_STATUSES;

module.exports = {
  task,
  taskStatuses,
  tasks: getTasks,
  tasksByStatus,
};
