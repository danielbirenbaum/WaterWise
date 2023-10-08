import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { isLight } from 'native-base/lib/typescript/theme/v33x-theme/tools';
import React from 'react'
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native'
import {Typography,Colors, Gradient, GradientTypes, Shadows} from 'react-native-ui-lib';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart'


function LikeCard({source, name, icon , id}) {
  
  return (
    <View style={styles.card}>
       
        <ImageBackground 
        imageStyle={{borderRadius:20}} 
        source={source} 
        style={styles.image}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 14, height: 36}}>
                    <View style={{flexDirection: 'column', alignContent: 'flex-start'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                {icon ? 
                                    <FontAwesomeIcon icon={faHeart} size={15} style={{borderWidth: 10, marginTop: 10}} color='white'/>
                                    :
                                    null
                                }
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color: Colors.white  ,marginStart:'25%' , marginTop:'5%', fontSize:15, fontWeight: 'bold', opacity:1 }}>{name}</Text>
                                </View>
                            </View>
                    </View>
            </View>
        </ImageBackground>
    </View>
  )
}

export default LikeCard

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
        flex: 1,
        alignSelf:'center',
        marginBottom: 10,
    },

    label: {
        textAlign: 'center',
        flex: 1,
    },

})