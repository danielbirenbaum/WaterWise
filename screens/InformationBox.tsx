import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const InformationBox = ({name, label}) => {
  return (
    <View style={styles.informacao}>

        <View style={styles.box}>
          <Text style={styles.name}>{name}</Text>  
          <View style={styles.labelBox}>
            <Text style={styles.label}> {label} </Text>
          </View>
          
        </View>
        
    </View>
  )
}

export default InformationBox

const styles = StyleSheet.create({
    informacao: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-evenly',
      },

    box: {
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#253F76',
        borderRadius: 40,
    },
    
    labelBox: {
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#253F76',
        borderRadius: 40,
    },

    name: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    label: {
        backgroundColor: '#80B3F4',
        borderRadius: 60,
        color: '#FFFFFF',
        justifyContent: 'center',
        textAlign: 'center',
        
    }
})