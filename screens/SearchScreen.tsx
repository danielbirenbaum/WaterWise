import React from 'react'
import  {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity}  from "react-native";
import Card from '../Components/Card'
function SearchScreen() {
  //TODO: PEGAR IMAGENS MENORES
  const ocean = require('../assets/Ocean.jpg')
  // const image2 = require('../assets/Image2.jpg')
  

  return (
    <>
    <View style={{flex: 1, backgroundColor: '#FAEBD7'}}>
      <Card source={ocean} title={"How to protect our oceans"} label={'lorem impusm'}></Card>
      {
          /* <Card source={image2} title={"Engaged species"} label={'Learn more about it'}></Card> */
      }

    </View>

    <View>
      <Text>FAC</Text>
      <Text>Problemas, problemas, problemas</Text>
    </View>
    </>
  )
}

export default SearchScreen


const styles = StyleSheet.create({
  main:{

  }
})