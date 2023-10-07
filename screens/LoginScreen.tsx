import { StyleSheet, Text, TextInput, View, Button, Pressable, Image, SafeAreaView } from 'react-native';
import React,{useState ,  createContext , useContext} from 'react';


export default function LoginScreen({navigation}){
  const logoPath = "./assets/Logo.png";
  var screenIndex = 1;

  return (
    <View style={styles.main}>
  
      <View style={{flex: 10}}>
        <Image source={require('.' + logoPath)} style={styles.logo}/>
      </View>
      <View style={styles.input}>
        <Pressable style={styles.buttonInput}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable style={styles.buttonInput}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        
        <Pressable style={styles.buttonInput} onPress={() => navigation.navigate('MainScreen')}> 
          <Text style={styles.buttonText}>Continue without an account</Text>
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
        marginBottom: 345,
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
      fontSize: 20,
      fontWeight: 'bold',
    },

    buttonHoverIn: {
      backgroundColor: '#fff',
    }
});