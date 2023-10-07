import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const MainPage = () => {
  return (
    <Text style={styles.text}>Main Page</Text>
  )
}

export default MainPage

const styles = StyleSheet.create({
  text: {
    fontSize: 90,
    textAlign: 'center',
    margin: 10,
  }

})