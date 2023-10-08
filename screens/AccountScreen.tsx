import React from 'react'
import {Colors} from 'react-native-ui-lib';
import { TextField, Text, Button , View} from 'react-native-ui-lib';

function AccountScreen() {
  return (
    <View style={{flexDirection:'column'  , height:'100%' , width:'100%'}}>

      <View style={{flexDirection:'row'}}>
        <View></View>
        <View></View>
      </View>

      <View style={{flexDirection:'column'}}>
        <View></View>
        <View></View>
      </View>

      <View style={{flexDirection:'row'}}>
        <View></View>
        <View></View>
      </View>

      <View style={{flexDirection:'row'}}>
        <View></View>
        <View></View>
      </View>

      <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
          <View></View>
          <View></View>
        </View>
        <View style={{flexDirection:'column'}}>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>
      
    </View>
  )
}

export default AccountScreen