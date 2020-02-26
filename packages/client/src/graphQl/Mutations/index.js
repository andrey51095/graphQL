import gql from 'graphql-tag'

export const CREATE_TASK_MUTATION = gql`
  mutation createTaskMutation($title: String!, $description: String!, $boardName: String!) {
    createTask(
      title: $title
      description: $description
      boardName: $boardName
    ) {
      title
      description
    }
  }
`;

export const DELETE_TASK_MUTATION = gql`
  mutation deleteTaskMutation($name: String!) {
    deleteTask(
      name: $name
    ) {
      name
    }
  }
`;

export const UPDATE_TASK_MUTATION = gql`
  mutation updateTaskMutation(
    $name: String!
    $title: String!
    $status: String!
    $description: String!
    ) {
      updateTask(
        name: $name
        title: $title
        status: $status
        description: $description
      ) {
        name
      }
    }
`;

export const SET_TASK_STATUS = gql`
  mutation setTaskStatus(
    $name: String!
    $status: String!
  ) {
    setTaskStatus(
      name: $name
      status: $status
    ) {
      name
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard(
    $name: String!
  ) {
    createBoard(name: $name) {name}
  }
`
