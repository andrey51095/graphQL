
const createTask = async (parent, args, context, info) => {
  const {title, description} = args;
  const {Task} = context.schemas;

  const answer = await Task.create({
    title,
    description,
  })
  console.log('answer: ', answer);

  return answer;
};

const updateTask = async (parent, args, context, info) => {
  const {id, title, description} = args;
  const {Task} = context.schemas;

  const answer = await Task.findOneAndUpdate({id},{
    title,
    description,
    updatedAt: Date.now(),
  }, {upsert: true})
  console.log('answer: ', answer);

  return answer;
};

module.exports = {
  createTask,
  updateTask,
};
