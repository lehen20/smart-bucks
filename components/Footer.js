import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {trade} from '.././assets/trade.png'

export default function Footer(props){
    return(
            <Text>
            <View style={{padding:50}}> 
            
            <ImageBackground source= {{trade}} /> 
            </View>
            </Text>
            
        
    );
}