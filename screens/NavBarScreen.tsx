import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap'
import { faCircleUser}  from '@fortawesome/free-solid-svg-icons/faCircleUser'
import { faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faBars}  from '@fortawesome/free-solid-svg-icons/faBars'
import {faLocationPin} from '@fortawesome/free-solid-svg-icons/faLocationPin'
import {faQuestion} from '@fortawesome/free-solid-svg-icons/faQuestion';
import MainPage from '../screens/MainScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from './SearchScreen';
import LocationScreen from './LocationScreen';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export const NavBarScreen = () => {
  return (
      <Tab.Navigator initialRouteName='MainScreen' screenOptions={{tabBarShowLabel: false, tabBarStyle: {backgroundColor: '#253F76'}, tabBarActiveBackgroundColor: '#80B3F4'}}>
        <Tab.Screen name="MainScreen" component={MainPage} options={{
          headerStyle: {backgroundColor: '#FAEBD7'},
          headerTitle: () => (
            <>
            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center'}}>
              <FontAwesomeIcon icon={faLocationPin} color='#253F76' size={35}/>
              <Text style={{ marginLeft: 20, fontSize: 25, textAlign: 'center'}}>Rio de Janeiro</Text>
            </View>
            </>
          ),
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faMap} color='#FAEBD7'/>
          ),
        }}/>
        <Tab.Screen name="Location" component={LocationScreen} options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faBars} color='#FAEBD7'/>
          ),
        }}/>
        <Tab.Screen name="SearchScreen" component={SearchScreen} options={{
          headerStyle: {backgroundColor: '#FAEBD7'},
          headerTitle: () => (
            <>
            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center'}}>
              <FontAwesomeIcon icon={faQuestion} color='#253F76' size={35}/>
              <Text style={{ marginLeft: 20, fontSize: 25, textAlign: 'center'}}>FAQ</Text>
            </View>
            </>
          ),
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faQuestion} color='#FAEBD7'/>
          ),
        }}/>
        <Tab.Screen name="AccountScreen" component={AccountScreen} options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faCircleUser} color='#FAEBD7'/>
          ),
        }}/>
        
        
      </Tab.Navigator>
  )
}
