import React from 'react';
import { Text } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loader from '../components/Loader';

export const InitialData = ({ token }) => (
  <Query
    query={gql`
      {
        hello
      }
    `}
    context={{ headers: { Authorization: 'Bearer ' + token } }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Text>{JSON.stringify(error)}</Text>;
      return <Text>{JSON.stringify(data.hello)}</Text>;
    }}
  </Query>
);