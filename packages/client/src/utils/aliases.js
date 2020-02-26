const aliases = {
  title: 'Title',
  description: 'Description',
  status: 'Status',
  createdAt: 'Created at',
  updatedAt: 'Updated at',
  backlog: 'Backlog',
  open: 'Open',
  blocked: 'Blocked',
  'in-review': 'In review',
  done: 'Done',
};

export const getAlias = alias => aliases[alias] || alias;