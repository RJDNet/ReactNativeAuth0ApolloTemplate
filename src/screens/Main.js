import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SInfo from 'react-native-sensitive-info';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { InitialData } from '../data/queries/Data';

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
    console.log(userdata);

    return (
      <ApolloProvider client={client}>
        <View style={styles.firstMainContainer}>

          <View style={styles.mainPost}>
            <View style={{ flexDirection: 'row' }}>
              <Avatar
                size='medium'
                rounded
                title='MD'
              />
              <Text style={{ textAlign: 'center' }}>John Doe</Text>
            </View>
            <View>
              <InitialData token={userdata} />
            </View>
          </View>


          <View style={styles.mainComments}>
            <Button
              containerStyle={{ width: '100%' }}
              title='Comments (12)'
            />
          </View>
        </View>

        <View style={styles.secondMainContainer}>
          <Button
            containerStyle={styles.buttonOne}
            type='clear'
            title='Logout'
            onPress={this.onLogout}
          />
          <Button
            icon={
              <Icon
                name="commenting-o"
                size={100}
                color={'black'}
              />
            }
            containerStyle={styles.buttonTwo}
            type='clear'
          />
          <Button
            containerStyle={styles.buttonThree}
            type='clear'
            title='Account'
            onPress={() => this.props.navigation.navigate('Account')}
          />
        </View>
      </ApolloProvider>
    );
  };
};

const styles = StyleSheet.create({
  firstMainContainer: {
    flex: 2,
    padding: 30,
    backgroundColor: '#fff'
  },
  secondMainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: '#fff'
  },

  mainPost: {
    flex: 1,
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'gray'
  },
  mainComments: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  buttonOne: {
    width: '25%'
  },
  buttonTwo: {
    width: '50%',
    paddingBottom: 20
  },
  buttonThree: {
    width: '25%'
  }
});
