import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import SInfo from 'react-native-sensitive-info';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { InitialData } from '../queries/Data';

const client = new ApolloClient({
  uri: 'http://192.168.1.68:4000/graphql'
});

export default class Main extends Component {
  onLogout = async () => {
    // if (Platform.OS === 'android') {
    await SInfo.deleteItem('accessToken', {});
    await SInfo.deleteItem('currentDate', {});
    await SInfo.deleteItem('expiresDate', {});
    this.props.navigation.navigate('Login');

    // Logout for IOS

    // } else {
    // auth0
    //   .webAuth
    //   .clearSession()
    //   .then(success => {
    //     this.setState({ hasInitialized: false });
    //   })
    //   .catch(error => console.log(error));
    // }
  };

  render() {
    const userdata = this.props.navigation.getParam('userdata', 'NO USER DATA');

    return (
      <ApolloProvider client={client}>
        <View>
          <Text>Main Screen</Text>
          <InitialData token={userdata} />
          <Button onPress={this.onLogout} title='Logout' />
        </View>
      </ApolloProvider>
    );
  };
};
