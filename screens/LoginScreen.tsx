import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, Image, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCircleUser}  from '@fortawesome/free-solid-svg-icons/faCircleUser'



export default function LoginScreen(){
  const logoPath = "./assets/Logo.png";
  var screenIndex = 1;

  return (
    <View style={styles.main}>
  
      <View style={{flex: 2}}>
        <Image source={require('.' + logoPath)} style={styles.logo}/>
      </View>

      <View style={{flex: 3}}>
        <Text style={styles.title}>WATER WISE</Text>
      </View>

      <View style={styles.input}>
        <Pressable style={styles.buttonInput}>
          <FontAwesomeIcon icon={faUser} size={45} style={{color: '#253F76', marginRight: 10, marginTop: 10}}/>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable style={styles.buttonInput}>
          <FontAwesomeIcon icon={faCircleUser} size={45} style={{color: '#253F76', marginTop: 10}}/>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        
        <Pressable style={styles.buttonInput}> 
          <Text style={styles.buttonText}>Developer</Text>
        </Pressable>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#FAEBD7',
        alignItems: 'center',
        height: '100%',
      },

    logo: {
        flex: 1,
        marginBottom: 5,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#437AF0',
      backgroundColor: '#8CB6EC',
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
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#253F76',
      padding: 10,
      margin: 10,
      borderRadius: 30,
      justifyContent: 'center',
    },

    buttonText: {
      textAlign: 'center',
      color: '#253F76',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 45,
      marginTop: 10
    },

    buttonHoverIn: {
      backgroundColor: '#fff',
    },

    title: {
      textAlign: 'center',
      color: '#253F76',
      fontSize: 40,
      fontWeight: 'bold',
    }
});