import React from 'react'
import { Text , FlatList } from 'react-native'
import Card from '../Components/Card'
import LocationCard from '../Components/LocationCard'
import { ScrollView } from 'react-native-gesture-handler';
import {View} from 'react-native';

interface cardInfo{ 
  key: number,
  isSelected: boolean,
  path: string;
  name: string;
  label: string;
}

const data: cardInfo[] = [
  {
    key: 0,
    isSelected: true,
    path: require("../assets/locations/botafogo.jpg"),
    name: "Botafogo Beach",
    label:"WQ: 96; EE: 4"
  },
  {
    key: 1,
    isSelected: false,
    path: require("../assets/locations/copacabana.jpg"),
    name: "Copacabana Beach",
    label:"WQ: 72; EE: 3"
  },
  {
    key: 2,
    isSelected: false,
    path: require("../assets/locations/leblon.jpeg"),
    name: "Leblon",
    label:"WQ: 25; EE: 0"
  },
  {
    key: 3,
    isSelected: false,
    path: require("../assets/locations/reserva.jpg"),
    name: "Praia da Reserva",
    label:"WQ: 75; EE: 3"
  },
  {
    key: 4,
    isSelected: false,
    path: require("../assets/locations/barraDaTijuca.jpg"),
    name: "Barra da Tijuca",
    label:"WQ: 99; EE: 6"
  },
  {
    key: 5,
    isSelected: false,
    path: require("../assets/locations/arpoador.jpg"),
    name: "Praia do Arpoador",
    label:"WQ: 78; EE: 2"
  },
]



function LocationScreen() {
  return (
    <>
      {data.map((i) => {
              return(<LocationCard key={i.key} source={i.path} name={(i.name)} label={(i.label)} icon={i.isSelected}/>)
          })}    
    </>
  )
}

export default LocationScreen