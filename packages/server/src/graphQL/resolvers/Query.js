const {TASK_STATUSES} = require('../../constants');

const tasks = async (parent, args, context, info) => {
  console.log('context: ', context);
  const {Task} = context.schemas;
  const tasks = await Task.find({});
  console.log('tasks: ', tasks);
  return tasks;
};

const taskStatuses = () => TASK_STATUSES;

module.exports = {
  taskStatuses,
  tasks,
};