import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import {Colors} from 'react-native-ui-lib';
import { TextField, Text, Button , View} from 'react-native-ui-lib';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import LikeCard from '../Components/LikeCard'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-gesture-handler';

Colors.loadColors({
  bluew: '#80B3F4',
  darker_blue: '#253F76',
  grey: '#6F6C6B' , 
  bege : '#FAEBD7'

});

function AccountScreen() {
  return (
    <View style={{flexDirection:'column'  , height:'100%' , width:'100%' , backgroundColor:Colors.bege}}>

      <View style={{flexDirection:'row', height:'20%'}}>
        <View style={{width:'30%' , marginStart:'5%'}}>
          <FontAwesomeIcon icon={faCircleUser} size={100} color='#80B3F4' style={{marginTop:'40%' ,alignSelf:'center'}}/></View>
        <View style={{width:'60%' , flexDirection:'row' ,  marginTop:'20%'}}>
          <View>
            <FontAwesomeIcon icon={faLocationPin} size ={50} style={{color:Colors.darker_blue}}/>
          </View>
          <View>
              <Text style={{color:Colors.darker_blue , fontSize:20, marginTop:'10%' , marginStart:'5%'}}>Rj -  Rio de Janeiro</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'column' , height:'15%'  , borderRadius:20 , marginStart:'10%' , marginEnd:'10%', marginTop: '10%' ,backgroundColor:Colors.darker_blue}}>
        <View style={{height:'40%'}}><Text style={{alignSelf:'center' , fontSize:24 , color:Colors.white , marginTop:'4%' }}>Change your e-email</Text></View>
        <View style={{height:'40%'}}><Text style={{alignSelf:'center', marginTop:'7%' ,  borderRadius:20 , backgroundColor:Colors.bege  , width:'90%' , height:'70%', textAlign:'center' ,color:Colors.grey30}}>email@gmail.com</Text></View>
      </View>

      <View style={{flexDirection:'row' , backgroundColor:Colors.darker_blue , height:'10%' , marginTop:'5%'  ,borderRadius:20 , marginStart:'10%' , marginEnd:'10%'}}>
        <View style={{width:'15%'}}> 
          <FontAwesomeIcon icon={faLock} size={40} style={{color:Colors.white , marginTop:'30%' , marginStart:'20%'}}/> 
        </View>
        <View style={{width:'70%'}}>
          <Text style={{color:Colors.white , alignSelf:'center' ,fontSize:20 , marginTop:'10%' , marginStart:'5%'}}>Change your password</Text></View>
        </View>

      <View style={{flexDirection:'row' , backgroundColor:Colors.darker_blue , marginTop:'5%', height:'10%' , marginStart:'10%' , marginEnd:'10%', borderRadius:20}}>
           
        <View style={{width:'15%' , marginStart:'3%'}}>
          <FontAwesomeIcon icon={faPhone} size={40} style={{color:Colors.white , marginTop:'30%' , marginStart:'20%'}}/>
        </View>
        <View style={{width:'70%'}}><Text style={{color:Colors.white , alignSelf:'center', fontSize:20 , marginTop:'10%'}}>Contact authorities</Text></View>
      </View>

      <View style={{flexDirection:'column' , height:'30%' , marginTop:'5%' , marginStart:'10%' , marginEnd:'10%' , }}>
        <View style={{flexDirection:'row' , height:'35%' , marginBottom:10 , borderRadius:20 , width:'110%' ,backgroundColor:Colors.darker_blue , alignSelf:'center'}}>
          <View style={{width:'30%'}}>  
            <FontAwesomeIcon icon={faChevronUp} size={40} style={{color:Colors.white , marginTop:'20%' , marginStart:'40%'}}/>
          </View>
          <View style={{width:'70%',}}><Text style={{color:Colors.white  , fontSize:30 , marginTop:'8%' , marginStart:'10%'}}>Liked</Text></View>
        </View>
          <LikeCard id={0} source={require("../assets/AccountScreenImages/pessoas.jpg")} name={"Comunity Service ..."} icon={true}></LikeCard>
          <LikeCard id={1} source={require("../assets/AccountScreenImages/conchas.jpg")} name={"Why you should..."} icon={true}></LikeCard>
          <LikeCard id={2} source={require("../assets/AccountScreenImages/dauphin.jpg")} name={"Vaquitas: Earth's ..."} icon={true}></LikeCard>
      </View>
      
    </View>
  )
}

export default AccountScreen