import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import AppContainer from "./src/components/AppContainer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#fff"
  }
});