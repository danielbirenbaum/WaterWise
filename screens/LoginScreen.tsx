import React from 'react'

import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

export default function LoginScreen() {

  return (
      <View style={styles.input}>
        <Pressable style={styles.buttonInput}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable style={styles.buttonInput}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        <Pressable style={styles.buttonInput} onPress={() => console.log("Botão pressionado")}> 
          <Text style={styles.buttonText}>Continue without an account</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#437AF0',
      backgroundColor: '#0A3E7D',
      padding: 10,
      margin: 10,
      borderRadius: 20,
      flexDirection : 'column',
      position: 'absolute',
      bottom: 0,
      width: 350,
      height: 335,
      alignContent: 'center',
      justifyContent: 'center',
    },
  
    buttonInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#437AF0',
      padding: 10,
      margin: 10,
      borderRadius: 30,
      justifyContent: 'center',
    },

    buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },

    buttonHoverIn: {
      backgroundColor: '#437AF0',
    }
  });