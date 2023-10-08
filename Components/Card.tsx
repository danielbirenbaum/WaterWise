import React from 'react'
import {Text, StyleSheet, Image, View} from 'react-native'



function Card({source, title , label}) {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={source} />
        <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'yellow',
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
        flex: 1
    },

    label: {
        textAlign: 'center',
        flex: 1,
    },

})