import React, { Component } from 'react'
import { View } from 'react-native';

import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';

import credentials from '../../auth0-credentials';

const auth0 = new Auth0(credentials);

export default class AuthLoading extends Component {
  componentDidMount() {
    SInfo.getItem('accessToken', {}).then(accessToken => {
      if (accessToken) {
        this.props.navigation.navigate('Main', { userdata: accessToken });
      } else {
        SInfo.getItem('refreshToken', {}).then(refreshToken => {
          auth0.auth
            .refreshToken({ refreshToken: refreshToken })
            .then(newAccessToken => {
              SInfo.setItem('accessToken', newAccessToken);
              this.props.navigation.navigate('Main', { userdata: newAccessToken.accessToken });
            })
            .catch(accessTokenErr => {
              this.props.navigation.navigate('Login');
            });
        })
          .catch(() => {
            this.props.navigation.navigate('Login');
          })
      }
    })
  };

  render() {
    return (
      <View />
    );
  };
};