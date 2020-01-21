import gql from 'graphql-tag';

export const QUERY_TASKS = gql`
  {
    tasks {
      id
      title
      description
      createdAt
      updatedAt
      status
    }
  }
`;

export const QUERY_TASKS_TITLE = gql`
  {
    tasks {
      id
      title
    }
  }
`;

export const QUERY_TASKS_TITLE_BY_STATUS = gql`
query TaskByStatus($status: String!){
    tasksByStatus(status: $status) {
      id
      title
    }
  }
`;

export const QUERY_TASKS_STATUSES = gql`
  {
    taskStatuses {
      name
      sequence
    }
  }
`;

export const QUERY_TASK = gql`
  query Task($id: String!){
    task(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      status
    }
  }
`;
