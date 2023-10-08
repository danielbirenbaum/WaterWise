import React from 'react'
import { Text , FlatList } from 'react-native'
import Card from '../Components/Card'
import LocationCard from '../Components/LocationCard'
import { ScrollView } from 'react-native-gesture-handler';
import {View} from 'react-native';

interface cardInfo{ 
  id: number,
  isSelected: boolean,
  path: string;
  name: string;
  label: string;
}

const data: cardInfo[] = [
  {
    id: 0,
    isSelected: true,
    path: require("../assets/locations/botafogo.jpg"),
    name: "Botafogo Beach",
    label:"WQ: 96; EE: 4"
  },
  {
    id: 1,
    isSelected: false,
    path: require("../assets/locations/copacabana.jpg"),
    name: "Copacabana Beach",
    label:"WQ: 72; EE: 3"
  },
  {
    id: 2,
    isSelected: false,
    path: require("../assets/locations/leblon.jpeg"),
    name: "Leblon",
    label:"WQ: 25; EE: 0"
  },
  {
    id: 3,
    isSelected: false,
    path: require("../assets/locations/reserva.jpg"),
    name: "Praia da Reserva",
    label:"WQ: 75; EE: 3"
  },
  {
    id: 4,
    isSelected: false,
    path: require("../assets/locations/barraDaTijuca.jpg"),
    name: "Barra da Tijuca",
    label:"WQ: 99; EE: 6"
  },
  {
    id: 5,
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
              return(<LocationCard id={i.id} source={i.path} name={(i.name)} label={(i.label)} icon={i.isSelected}/>)
          })}    
    </>
  )
}

export default LocationScreen