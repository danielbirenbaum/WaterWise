import React from 'react'
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native'
import {Colors} from 'react-native-ui-lib';



function Card({source, label}) {
  return (
    <View style={styles.card}>
        <ImageBackground imageStyle={{borderRadius:20 }} source={source} style={styles.image}><Text style={{color: Colors.white , marginTop:'45%' , alignSelf:'center' , fontSize:20, fontWeight: 'bold'}}>{label}</Text></ImageBackground>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    image: {
        resizeMode: 'cover',
        width:300 ,  
        flex: 0.8,
        alignSelf:'center',
    },

    label: {
        textAlign: 'center',
        flex: 1,
    },

})