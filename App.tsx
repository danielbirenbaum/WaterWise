import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  console.log('App running');

  return (
    //TODO: Criar um componente para o Login, não deixar no APP.tsx
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to WATER WISE</Text>

      <View style={styles.input}>
        <Button title='Log in' ></Button>
        <Button title='Sign in'></Button>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#437AF0',
    backgroundColor: '#1F3970',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection : 'column',
    position: 'absolute',
    bottom: 0,
    width: 350,
    height: 350,
    alignContent: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 50,
    textAlign: 'center',
    color: '#1F3970',
  },

  buttonInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#437AF0',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  }
});