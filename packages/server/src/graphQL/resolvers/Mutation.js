const createBoard = async (parent, args, context, info) => {
  const {name} = args;
  const {Board} = context.schemas;
  console.log('name: ', name)
  const answer = await Board.create({
    name,
  });
  return answer;
};

const createTask = async (parent, args, context, info) => {
  const {title, description, boardName} = args;
  const {Task, Board} = context.schemas;

  const {counter = 0} = Board.findOneAndUpdate({name: boardName}, {$inc: {counter: 1}}, {new: true});

  const answer = await Task.create({
    name: `${boardName.toUpperCase()}-${counter}`,
    title,
    description,
  })

  return answer;
};

const updateTask = async (parent, args, context, info) => {
  const {name, title, description, status} = args;
  const {Task} = context.schemas;

  const answer = await Task.findOneAndUpdate({name},{
    title,
    description,
    updatedAt: Date.now(),
    status,
  }, {upsert: true})

  return answer;
};

const deleteTask = async (parent, args, context, info) => {
  const {name} = args;
  const {Task} = context.schemas;

  const answer = await Task.findOneAndDelete({name});

  return answer;
}

const setTaskStatus = async (parent, args, context, info) => {
  const {name, status} = args;
  const {Task} = context.schemas;

  const answer = await Task.findOneAndUpdate({name}, {status});

  return answer;
}

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  setTaskStatus,
  createBoard,
};
