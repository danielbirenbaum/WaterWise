import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { isLight } from 'native-base/lib/typescript/theme/v33x-theme/tools';
import React from 'react'
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native'
import {Typography,Colors, Gradient, GradientTypes, Shadows} from 'react-native-ui-lib';


function LocationCard({source, name, icon , label, key}) {
  
  return (
    <View style={styles.card}>
       
        <ImageBackground 
        imageStyle={{borderRadius:20}} 
        source={source} 
        style={styles.image}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 14, height: 100}}>
                    <View style={{flexDirection: 'column', alignContent: 'flex-start'}}>
                            <Text style={{color:Colors.white , fontSize:15 , fontWeight: 'bold', opacity: 1}}>{label}</Text>
                            <View style={{flexDirection: 'row'}}>
                                {icon ? 
                                    <FontAwesomeIcon icon={faLocationPin} size={20} style={{borderWidth: 15 , marginTop:'12%'}} color='white'/>
                                    :
                                    null
                                }
                                <Text style={{color: Colors.white  , marginTop:'10%', fontSize:30, fontWeight: 'bold', opacity:1 }}>{name}</Text>
                            </View>
                    </View>
            </View>
        </ImageBackground>
    </View>
  )
}

export default LocationCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#FAEBD7",
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