import React from 'react'
import { StyleSheet,  TextInput} from 'react-native';
import MapView from 'react-native-maps';
import mapSettings from '../assets/mapSettings/mapSettings.json'
import {Colors} from 'react-native-ui-lib';
import { TextField, Text, Button , View} from 'react-native-ui-lib';

Colors.loadColors({
  blue: '#80B3F4',
  darker_blue: '#253F76',
  grey: '#6F6C6B' , 
  bege : '#FAEBD7'

});


const MainPage = () => {
  return (
    <>
    
      <Text>Aqui vem a bar de cima</Text>
      <View style={styles.mainMap}>
          <MapView style={styles.mapView} customMapStyle={mapSettings}/>
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
      </View>
      <View style={styles.informacao2}>
        <View style={{}}><Text>Informações 2</Text></View>
      </View>

      <View style={styles.informacao2}>

        <Text>Informações 3</Text>
      </View>
    </>
  )
}

export default MainPage

const styles = StyleSheet.create({
  mainMap: {
    flex: 2,
    backgroundColor: '#FAEBD7',
    height: '100%',
    width: '100%',
    borderWidth: 5,
    borderColor: '#253F76',
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'contain',
  },

  mapView: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  informacao1: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-evenly',

    
  },

  informacao2: {
    flex: 1,
    backgroundColor: Colors.darker_blue,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width:'80%',
    borderRadius: 30,
    marginBottom:10,

  },

  

  


})