import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  console.log('App executando');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to WATER WISE</Text>

      <View style={styles.input}>
        <Button style={styles.buttonInput} title='Log in'></Button>
        <Button style={styles.buttonInput} title='Sign in'></Button>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline',
  },

  input: {
    borderWidth: 1,
    borderColor: '#437AF0',
    backgroundColor: '#1F3970',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection : 'row',
  },

  titleText: {
    fontSize: 50,
    textAlign: 'center',
    color: '#1F3970',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#437AF0',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    
  },

  buttonInput: {
    borderWidth: 1,
    borderColor: '#437AF0',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  }
});