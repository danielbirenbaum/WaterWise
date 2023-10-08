import React from 'react'
import {Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  LoginScreen  from '../screens/LoginScreen';

const Stack = createNativeStackNavigator()

function Authentication() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Authentication