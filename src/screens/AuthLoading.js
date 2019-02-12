import React, { Component } from 'react'
import { View } from 'react-native';

import SInfo from 'react-native-sensitive-info';
// import Auth0 from 'react-native-auth0';

// import credentials from '../../auth0-credentials';

// const auth0 = new Auth0(credentials);

export default class AuthLoading extends Component {
  async componentDidMount() {
    const accessToken = await SInfo.getItem('accessToken', {});
    const currentDate = await SInfo.getItem('currentDate', {});
    const expiresDate = await SInfo.getItem('expiresDate', {});

    if (accessToken && currentDate < expiresDate) {
      this.props.navigation.navigate('Main', { userdata: accessToken });
    } else {
      this.props.navigation.navigate('Login');
    };
  };

  render() {
    return (
      <View />
    );
  };
};