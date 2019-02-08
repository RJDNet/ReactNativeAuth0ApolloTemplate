import React, { Component } from 'react';
import { View } from 'react-native';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';

import credentials from '../../auth0-credentials';

const auth0 = new Auth0(credentials);

export default class Login extends Component {
  componentDidMount() {
    auth0
      .webAuth
      .authorize({ scope: 'openid profile email', audience: 'https://rjd.eu.auth0.com/userinfo', prompt: "login" })
      .then(credentials => {
        SInfo.setItem("accessToken", credentials.accessToken, {});
        SInfo.setItem("refreshToken", credentials.refreshToken, {});
        auth0.auth
          .userInfo({ token: credentials.accessToken })
          .then(data => {
            this.props.navigation.navigate('Main', { userdata: data.sub });
          })
          .catch(err => {
            console.log('error getting accessToken', err);
          });
      })
      .catch(err => console.log("error occurred while trying to authenticate: ", err));
  };

  render() {
    return (
      <View />
    );
  }
}
