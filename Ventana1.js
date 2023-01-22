import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Ventana1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> Hello world </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
  },
});
