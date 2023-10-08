import { StatusBar } from 'expo-status-bar';
import React,{useState ,  createContext , useContext} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import MainPage from './screens/MainScreen';
import AccountScreen from './screens/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap'
import { faCircleUser}  from '@fortawesome/free-solid-svg-icons/faCircleUser'
import { NavBarScreen } from './screens/NavBarScreen';
import Authentication from './Components/Authentication' 




const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {
  var isSignedIn = false;


  return (
    <NavigationContainer>
      {isSignedIn ? 

        <Authentication></Authentication>
      : 
        <NavBarScreen></NavBarScreen>
      
      }

    </NavigationContainer>
  );
};

