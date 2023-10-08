import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native'
import {Colors} from 'react-native-ui-lib';



function LocationCard({source, name, icon , label}) {
  return (
    <View style={styles.card}>
        <ImageBackground 
        imageStyle={{borderRadius:20}} 
        source={source} 
        style={styles.image}>
            <View style={{flexDirection: 'column', alignContent: 'flex-start'}}>
                <View style={{flexDirection: 'row'}}>
                    {icon ? 
                        <FontAwesomeIcon icon={faLocationPin} size={20} style={{borderWidth: 20 , marginTop:'20%'}} color='white'/>
                        :
                        null
                    }
                    <Text style={{color: Colors.white , marginTop:'15%', fontSize:30, fontWeight: 'bold' }}>{name}</Text>
                </View>
                
                <Text style={{color:Colors.white , marginStart:'15%' , fontSize:15}}>{label}</Text>
            </View>
            
        </ImageBackground>
    </View>
  )
}

export default LocationCard

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
        resizeMode: 'contain',
        width:300 ,  
        flex: 0.8,
        alignSelf:'center',
    },

    label: {
        textAlign: 'center',
        flex: 1,
    },

})