import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import trade from '.././assets/trade.png'
import diamond from '.././assets/diamond.png'

export default function Header(props){
    return(
        <View>
            <View style={styles.container}>
                <ImageBackground source= {diamond} resizeMode='cover' style = {styles.image}>
                
                </ImageBackground> 
                {/* <Text style={styles.text}> Inside </Text> */}
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
          
        },
    image: {
    //   paddingTop: 50,
    //   flex: 1,
      padding: 100,
      justifyContent: 'center',
      width: 425, 
      height:500
    },
    text: {
      color: 'turquoise',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'italic',
      textAlign: 'center',
      borderRadius: '50'
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



