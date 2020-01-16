import React from 'react'
import Link from '../Link'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'


const LinkList = () => {
  const FEED_QUERY = gql`
  {
    feed {
      id
      text
    }
  }
`;

  return (
    <Query query={FEED_QUERY}>
    {({ loading, error, data }) => {
      console.log('data: ', data);
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>

      const linksToRender = data.feed

      return (
        <div>
          {linksToRender.map(link => <Link key={link.id} link={link} />)}
        </div>
      )
    }}
  </Query>
  )
}

export default LinkList