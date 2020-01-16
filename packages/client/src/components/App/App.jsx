import React from 'react';

import LinkList from '../LinkList';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import './App.css';

const POST_MUTATION = gql`
  mutation createTaskMutation($title: String!, $description: String!) {
    createTask(
      title: $title
      description: $description
    ) {
      title
      description
    }
  }
`

const  App = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
  <div>
     <input
      value={title}
      onChange={e => setTitle(e.target.value)}
      type="text"
      placeholder="A title for the link"
    />
    <input
      value={description}
      onChange={e => setDescription(e.target.value)}
      type="text"
      placeholder="A description for the link"
    />
    <Mutation mutation={POST_MUTATION} variables={{ title, description }}>
      {(createTaskMutation) => <button onClick={createTaskMutation}>Add new link</button>}
    </Mutation>

    <LinkList />
  </div>)
}

export default App;
