import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import mapSettings from '../assets/mapSettings/mapSettings.json'
import InformationBox from './InformationBox';

const MainPage = () => {
  return (
    <>
      <Text>Aqui vem a bar de cima</Text>
      <View style={styles.mainMap}>
          <MapView style={styles.mapView} customMapStyle={mapSettings}/>
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <InformationBox name={'ph'} label={'7.5'} ></InformationBox>
        <InformationBox name={'Temperature'} label={'30ºC'}></InformationBox>
      </View>
      <View style={styles.informacao2}>
        <Text>Informações 2</Text>
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
    backgroundColor: '#80B3F4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  

  


})