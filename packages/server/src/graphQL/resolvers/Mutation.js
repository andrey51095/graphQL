
const createTask = async (parent, args, context, info) => {
  const {title, description} = args;
  const {Task} = context.schemas;

  const answer = await Task.create({
    title,
    description,
  })

  return answer;
};

const updateTask = async (parent, args, context, info) => {
  const {id, title, description, status} = args;
  console.log('args: ', args);
  const {Task} = context.schemas;

  const answer = await Task.findOneAndUpdate({id},{
    title,
    description,
    updatedAt: Date.now(),
    status,
  }, {upsert: true})

  return answer;
};

const deleteTask = async (parent, args, context, info) => {
  const {id} = args;
  const {Task} = context.schemas;

  const answer = await Task.findOneAndDelete({id});

  return answer;
}

const setTaskStatus = async (parent, args, context, info) => {
  const {id, status} = args;
  const {Task} = context.schemas;

  const answer = await Task.findOneAndUpdate({id}, {status});

  return answer;
}

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  setTaskStatus,
};
