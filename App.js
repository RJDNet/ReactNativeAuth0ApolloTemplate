import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import AppContainer from "./src/components/AppContainer";

// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from 'react-apollo';

// const client = new ApolloClient({
//   uri: "https://fakerql.com/"
// });

export default class App extends Component {
  render() {
    return (
      // <ApolloProvider client={client}>
      <View style={styles.container}>
        <AppContainer />
      </View>
      // </ApolloProvider> 
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff"
  }
});