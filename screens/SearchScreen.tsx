import React from 'react'
import  {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity}  from "react-native";
import Card from '../Components/Card'
import {Colors} from 'react-native-ui-lib';
import { FlatList } from 'react-native-gesture-handler';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


Colors.loadColors({
  bluew: '#80B3F4',
  darker_blue: '#253F76',
  grey: '#6F6C6B' , 
  bege : '#FAEBD7'

});

function SearchScreen() {
  const ocean = require('../assets/Ocean.jpg')
  const seaweed = require('../assets/Seaweed.jpg')
  

  return (
    <View style={styles.main}>
      <View style={{flex: 1}}>
        <Card source={ocean}  label={'How to protect ou oceans'}></Card>
        <Card source = {seaweed} label={"Learn more about engaged species"}></Card>
      </View>
        
        
      <View style={styles.bottomFaq}>
        <Text style={styles.faqTitle}>FAQ</Text>
        <ScrollView>
          <View style={styles.faqItem}> 
            <View style={{flexDirection:'column' , marginStart:20}}>
              <Text style={{fontSize: 24 , fontWeight: 'bold',}}>What do "WQ" and "EE" means? </Text>
              <Text style={{fontSize: 16  , marginBottom:10}}>WQ means 'Water Quality" , while EE means ...</Text>
            </View>
            <View style={{ marginStart:15}}>
              <FontAwesomeIcon icon={faArrowRight} style={{marginTop: 17}}/>
            </View>
          </View>
          <View style={{flex: 1 , flexDirection: 'row', marginTop:20 , borderStartColor:Colors.bege ,borderEndColor:Colors.bege, borderWidth:1,}}> 
            <View style={{flexDirection:'column' }}>
              <Text style={{fontSize: 25, marginStart:20  , fontWeight: 'bold',}}>What do "DO" means? </Text>
              <Text style={{fontSize: 18,  marginStart:20 }}>Dissolved oxygen (DO) is a measure of how...</Text>
            </View>
            <View style={{width:'20%'}}>
              <FontAwesomeIcon icon={faArrowRight} style={{marginTop: 20}}/>
            </View>
          </View>
        </ScrollView>
      </View>

    </View>   
  )
}

export default SearchScreen


const styles = StyleSheet.create({
  main:{
    flex: 1, 
    backgroundColor: '#FAEBD7',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomFaq: {
    borderColor: Colors.grey40,
    borderWidth:5 , 
    flex: 0.5,
    backgroundColor: '#FDE2BE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopEndRadius:40,
    borderTopStartRadius:40 ,
    flexDirection : 'column',
    position: 'relative',
    bottom: 0,
    width: '110%',
    height: '120%',
  },
  faqTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 3,
  },

  faqItem: {
    borderStartColor:Colors.bege ,
    borderEndColor:Colors.bege, 
    borderWidth:1,
    fontSize: 10,
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
  }
})