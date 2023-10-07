import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  console.log('App running');
  const logoPath = "./assets/Logo.png";

  return (
    <View style={styles.main}>
      {
        //TODO: Remover o título e a Logo quando mudar de screen
      }
       
      <Text style={styles.titleText}>Water Wise</Text>
      <View style={{flex: 3}}>
        <Image source={require(logoPath)} style={styles.logo}/>
      </View>


      <LoginScreen></LoginScreen>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#1F3970',
      alignItems: 'center',
      height: '100%',
    },
    
    titleText: {
      flex: 1,
      fontSize: 50,
      textAlign: 'center',
      color: '#fff',
      marginTop: 45,
    },

    logo: {
      flex: 1,
      marginBottom: 345,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
});