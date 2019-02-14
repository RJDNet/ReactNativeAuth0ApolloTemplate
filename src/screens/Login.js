import React, { Component } from 'react';
import { View } from 'react-native';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';

import credentials from '../constants/auth0-credentials';

const auth0 = new Auth0(credentials);

export default class Login extends Component {
  componentDidMount() {
    auth0
      .webAuth
      .authorize({ scope: 'openid profile', audience: 'https://rjd.eu.auth0.com/api/v2/', prompt: 'login' })
      .then(credentials => {
        const eDate = new Date;

        eDate.setMonth(eDate.getMonth() + 1);
        SInfo.setItem('expiresDate', eDate, {});
        SInfo.setItem('accessToken', credentials.accessToken, {});

        this.props.navigation.navigate('Main', { userdata: credentials });
      })
      .catch(err => console.log('error occurred while trying to authenticate', err));
  };

  render() {
    return (
      <View />
    );
  }
}
