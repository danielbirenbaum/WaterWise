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
    path: "../assets/locations/botafogo.jpg",
    name: "Botafogo Beach",
    label:"WQ: 96; EE: 4"
  },
  {
    id: 1,
    isSelected: false,
    path: "../assets/locations/copacabana.jpg",
    name: "Copacabana Beach",
    label:"WQ: 72; EE: 3"
  },
  {
    id: 2,
    isSelected: false,
    path: "../assets/locations/leblon.jpeg",
    name: "Leblon",
    label:"WQ: 25; EE: 0"
  },
  {
    id: 3,
    isSelected: false,
    path: "../assets/locations/reserva.jpg",
    name: "Praia da Reserva",
    label:"WQ: 75; EE: 3"
  },
  {
    id: 4,
    isSelected: false,
    path: "../assets/locations/barraDaTijuca.jpg",
    name: "Barra da Tijuca",
    label:"WQ: 99; EE: 6"
  },
  {
    id: 5,
    isSelected: false,
    path: "../assets/locations/arpoador.jpg",
    name: "Praia do Arpoador",
    label:"WQ: 78; EE: 2"
  },
]



function LocationScreen() {
  return (
    <>
      <LocationCard name={"Botafogo Beach"} label={"WQ: 96; EE: 4"} source={require("../assets/locations/botafogo.jpg")} icon={true} />
      <LocationCard name={"Copacabana Beach"} label={"WQ: 72; EE: 3"} source={require("../assets/locations/copacabana.jpg")} icon={false} />
      <LocationCard name={"Leblon Beach"} label={"WQ: 25; EE: 0"} source={require("../assets/locations/leblon.jpeg")} icon={false} />
      <LocationCard name={"Reserva Beach"} label={"WQ: 75; EE: 3"} source={require("../assets/locations/reserva.jpg")} icon={false} />
      <LocationCard name={"Barra da Tijuca"} label={"WQ: 99; EE: 6"} source={require("../assets/locations/barraDaTijuca.jpg")} icon={false} />
      <LocationCard name={"Praia do Arpoador"} label={"WQ: 78; EE: 2"} source={require("../assets/locations/arpoador.jpg")} icon={false} />
           
    </>
  )
}

export default LocationScreen