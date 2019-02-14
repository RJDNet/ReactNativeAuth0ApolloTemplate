import React, { Component } from 'react'
import { View } from 'react-native';

import SInfo from 'react-native-sensitive-info';
// import Auth0 from 'react-native-auth0';

// import credentials from '../constants/auth0-credentials';

// const auth0 = new Auth0(credentials);

export default class AuthLoading extends Component {
  async componentDidMount() {
    const cDate = await new Date;
    await SInfo.setItem('currentDate', cDate, {});
    const accessToken = await SInfo.getItem('accessToken', {});
    const currentDate = await SInfo.getItem('currentDate', {});
    const expiresDate = await SInfo.getItem('expiresDate', {});
    // console.log(accessToken);
    // console.log(currentDate);
    // console.log(expiresDate);

    if (accessToken && currentDate < expiresDate) {
      this.props.navigation.navigate('Main', { userdata: accessToken });
    } else {
      this.props.navigation.navigate('Login');
    };

    // this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View />
    );
  };
};