import gql from 'graphql-tag';

export const QUERY_TASKS = gql`
  {
    tasks {
      name
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
      name
      title
    }
  }
`;

export const QUERY_TASKS_TITLE_BY_STATUS = gql`
query TaskByStatus($status: String!){
    tasksByStatus(status: $status) {
      name
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
  query Task($name: String!){
    task(name: $name) {
      name
      title
      description
      createdAt
      updatedAt
      status
    }
  }
`;
