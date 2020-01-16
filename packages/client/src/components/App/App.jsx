import React from 'react';

import LinkList from '../LinkList';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import './App.css';

const POST_MUTATION = gql`
  mutation PostMutation($text: String!) {
    post(text: $text) {
      id
      text
    }
  }
`

const  App = () => {
  const [text, setText] = React.useState('');

  return (
  <div>
     <input
      className="mb2"
      value={text}
      onChange={e => setText(e.target.value)}
      type="text"
      placeholder="A description for the link"
    />
    <Mutation mutation={POST_MUTATION} variables={{ text }}>
      {(postMutation) => <button onClick={postMutation}>Add new link</button>}
    </Mutation>

    <LinkList />
  </div>)
}

export default App;
