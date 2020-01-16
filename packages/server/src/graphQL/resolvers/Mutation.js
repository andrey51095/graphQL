
const post = (parent, {description, url}) => {
   const link = {
    id: `link-${idCount++}`,
    description,
    url,
  };
  links.push(link)
  return link;
};

module.exports = {
  post
};