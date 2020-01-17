import gql from 'graphql-tag'

export const CREATE_TASK_MUTATION = gql`
  mutation createTaskMutation($title: String!, $description: String!) {
    createTask(
      title: $title
      description: $description
    ) {
      title
      description
    }
  }
`;

export const DELETE_TASK_MUTATION = gql`
  mutation deleteTaskMutation($id: String!) {
    deleteTask(
      id: $id
    ) {
      id
    }
  }
`;

export const UPDATE_TASK_MUTATION = gql`
  mutation updateTaskMutation(
    $id: String!
    $title: String!
    $status: String!
    $description: String!
    ) {
      updateTask(
        id: $id
        title: $title
        status: $status
        description: $description
      ) {
        id
      }
    }
`;