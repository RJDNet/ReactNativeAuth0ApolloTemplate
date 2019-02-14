import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class Account extends Component {
  render() {
    return (
      <View>
        <Button
          title='Back'
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  };
};

export default Account;