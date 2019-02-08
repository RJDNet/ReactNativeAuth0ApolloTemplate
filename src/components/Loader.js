import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Loader = () => {
  return (
    <Text style={styles.loader}>Loading...</Text>
  );
};

const styles = StyleSheet.create({
  loader: {
    fontSize: 30
  }
});

export default Loader;