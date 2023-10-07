import { StatusBar } from 'expo-status-bar';
import React,{useState ,  createContext , useContext} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import MainPage from './screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="MainScreen" component={MainPage} />
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Water Wise', headerStyle: {backgroundColor: '#FAEBD7'}, headerTintColor: '#253F76'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

