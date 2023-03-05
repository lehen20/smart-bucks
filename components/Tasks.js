import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import trade from '.././assets/trade.png'

export default function Tasks(props){
    return(
        <NavigationContainer>
            {/* <View style={{padding:50}}> 
            <Text>{props.name}</Text>
            </View> */}
        <View style={styles.container}>
        <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
      <Image
        style={styles.image}
        source={trade}
      />

        </View>
        </NavigationContainer>
        
    );
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
          paddingTop: 0,
          width: 500, 
          height:500
        },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    }
  
  });
  


// const styles = StyleSheet.create({
//     container: {
//         flex: 50,
//         backgroundColor: 'white',
//         paddingRight: 100,
//         paddingLeft: 100,
//         alignItems: 'center',
//         justifyContent: 'center'
//       }
//   });



