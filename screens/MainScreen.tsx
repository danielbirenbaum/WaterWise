import React from 'react'
import { StyleSheet,  TextInput} from 'react-native';
import MapView from 'react-native-maps';
import mapSettings from '../assets/mapSettings/mapSettings.json'
import {Colors} from 'react-native-ui-lib';
import { TextField, Text, Button , View} from 'react-native-ui-lib';



Colors.loadColors({
  bluew: '#80B3F4',
  darker_blue: '#253F76',
  grey: '#6F6C6B' , 
  bege : '#FAEBD7'

});


const MainPage = () => {
  return (
    <>
      <View style={styles.mainMap}>
          <MapView style={styles.mapView} customMapStyle={mapSettings}/>
      </View>

      <View style={styles.wholeView}>
          <View style={{borderWidth:1 , borderColor:Colors.dark , height:'15%' , width:'80%' ,  borderRadius:20 ,marginTop:5 , flexDirection:'row', backgroundColor:Colors.darker_blue}}>
            <View style={{width:'60%' ,borderRadius:20}}><Text style={{fontSize: 20 , color:Colors.white , marginTop:15 , marginStart:20}}>Temperature</Text></View>
            <View style={{width:'30%', height:'75%' ,backgroundColor:Colors.bege , marginStart:20 ,marginTop:10, borderRadius:20, alignContent:'center'}}><Text style={{fontSize: 32 , marginStart:17}}>18°C</Text></View>
          </View>

          <View style={{ height:'22%' , width:'80%' ,  borderRadius:20 ,marginTop:10,flexDirection:'row'}}>
            <View style={{ backgroundColor: Colors.darker_blue , width:'47%', marginEnd:10 , borderRadius:20 , flexDirection:'row'}}>
              <View style={{width:'30%' ,height:'60%', marginTop:20 , marginStart:10 , justifyContent: 'center' , alignContent:'center'}}><Text style={{color:Colors.white,fontSize:20 , marginStart:7 ,marginBottom:5}}>pH</Text></View>
              <View style={{width:'45%' ,height:'60%' , backgroundColor: Colors.bege , marginTop:20 , marginStart:10 , justifyContent: 'center' , alignContent:'center',  borderRadius:20}}><Text style={{color:Colors.dark , marginStart:15 ,marginBottom:3, fontSize:30}}>6.5</Text></View>
            </View>
            <View style={{ backgroundColor: Colors.darker_blue , width:'47%' ,marginStart:10, borderRadius:20 ,flexDirection:'row' }}>
              <View style={{width:'30%' ,height:'60%', marginTop:20 , marginStart:10 , justifyContent: 'center' , alignContent:'center'}}><Text style={{color:Colors.white,fontSize:20 , marginStart:7 ,marginBottom:5}}>DO</Text></View>
              <View style={{width:'45%' ,height:'60%' , backgroundColor: Colors.bege , marginTop:20 , marginStart:10 , justifyContent: 'center' , alignContent:'center',  borderRadius:20}}><Text style={{color:Colors.dark , marginStart:25 ,marginBottom:3, fontSize:30}}>X</Text></View>
            </View>
          </View>

          <View style={{ height:'28%' , width:'80%' ,  borderRadius:20 ,marginTop:10 , flexDirection:'column' , backgroundColor:Colors.darker_blue }}>
            <View style={{  flexDirection:'row',  justifyContent:'center', marginTop:5}}>
              <View style={{width:'65%' }}><Text style={{fontSize:22 ,color: Colors.white , marginStart:5}}>Water Quality</Text></View>
              <View style={{width:'30%'  , alignItems:'center' , backgroundColor: Colors.bege , borderRadius:20}}><Text style={{fontSize:28 , marginBottom:2}}>72</Text></View>
            </View>
            <View style={{}}>
              <View>
                <View style={{width:'90%' , height:'60%' , marginTop:15 ,marginStart:20, borderWidth:2 , borderColor:Colors.bluew , borderRadius: 40}}>
                  <View style={{width:'80%' , height:"100%" , backgroundColor: Colors.green40 , borderRadius:40}}><Text style={{marginStart:100 , fontSize:20 ,}}>Good</Text></View>
                </View>
              </View>
            </View>
          </View>

          <View style={{borderWidth:5 , borderColor:Colors.dark , height:'20%' , width:'80%' ,  borderRadius:20 ,marginTop:10}}>
            <View></View>
            <View></View>
          </View>
      </View>
    </>
  )
}

export default MainPage

const styles = StyleSheet.create({
  wholeView:{
    borderColor:Colors.white , 
    borderWidth: 5,
    marginTop:10,
    flexDirection:'column',
    height:'60%',
    width:'100%',
    backgroundColor: Colors.bege , 
    alignItems:'center'
  },
  mainMap: {
    flex: 2,
    height: '100%',
    width: '100%',
    borderWidth: 5,
    borderColor: Colors.darker_blue,
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'contain',
  },

  mapView: {
    borderColor:Colors.white , 
    borderWidth: 5,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.bege ,   
   
  },


})