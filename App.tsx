import { StatusBar } from 'expo-status-bar';
import React,{useState ,  createContext ,  useContext} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import MainPage from './screens/MainScreen';

export default function App() {
  console.log('App running');
  const logoPath = "./assets/LogoSemFundo.png";
  const [logado,setlogado] = useState(false)
  const [screenIndex, setScreenIndex] = useState(0)



  return (
    <View style={styles.main}>
    {logado? 
    <MainPage></MainPage> 
    :
    <View style={styles.main}>
    {
      //TODO: Remover o título e a Logo quando mudar de screen
    } 
    <Text style={styles.titleText}>Water Wise</Text>
    <View style={{flex: 10}}>
      <Image source={require(logoPath)} style={styles.logo}/>
    </View>
    <LoginScreen></LoginScreen>
    
  </View> 
    }
    </View>
    
  
  );
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#FAEBD7',
      alignItems: 'center',
      height: '100%',
    },
    
    titleText: {
      flex: 1,
      fontSize: 50,
      textAlign: 'center',
      color: '#253F76',
      marginTop: 45,
    },

    logo: {
      flex: 1,
      marginBottom: 345,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
});