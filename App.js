import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Tasks from './components/Tasks'
import Middle from './components/Middle'
import Footer from './components/Footer'
// import { trade } from './assets/trade.png' 

export default function App() {
  return (
    <View>
      <Tasks name= "Header"/>
      <StatusBar style="auto" />
      {/* <Footer name= "Footer"/> */}
      <Middle/>
      {/* <ImageBackground 
            source = {trade} 
            style={{flex:1, justifyContent: "flex-ennd", position: "relative" }}> 
            </ImageBackground> */}
    </View>

  );
}

