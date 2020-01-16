
const post = (parent, {description, url}) => {
  console.log('post', 'post');
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