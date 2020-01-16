
const info = `Some simple info`;

let links = [
  {
    id: 'link-0',
    text: 'stupid-text',
  },
]

let idCount = links.length

module.exports = {
  Query: {
    info: () => JSON.stringify(info),
    feed: () => links,
  },
  Mutation: {
    post: (parent, {text}) => {
       const link = {
        id: `link-${idCount++}`,
        text,
      };
      links.push(link)
      return link;
    },
  },
  Link: {
    id: ({id}) => id,
    text: ({text}) => text,
  },
};
