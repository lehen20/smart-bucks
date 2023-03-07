import React from 'react';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Box, ScrollView, Button,TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import diamond3 from '.././assets/diamond3.png'
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: "1",
    flexDirection: "column",
    height: 725,
    borderRadius: 30
  },
  text: {
    // flex: 1,
    paddingTop: 50,
    color: 'red',
    fontSize: 23,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "Helvetica-LightOblique"
  },
  linearGradient: {
    marginTop: 100,
    // flex: 1,
    justifyContent: 'center',
    marginBottom: 0,
    height: 200, 
    borderRadius: 20,
    padding: 50
  },
  footer: {
    backgroundColor: 'silver',
    marginTop: 680, 
    height: 90, 
    borderRadius: 20, 
    flexDirection: "column",
    width: 150 
  }, 
  ftext: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    borderEndColor: 'blue', 
  },
  image: {
    flexDirection: 'row',
    margin: 110,
    marginTop: 25,
    marginBottom: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 100,
    width: 100, 
    borderRadius: 60,
  },
  imbg: {
    backgroundColor: 'lightgrey',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  inputs: {
    marginTop: 20
  },
  TextInput: {
    margin: 20,
    borderRadius: 30,
    borderColor: 'darkblue',
    fontColor: 'white',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontStyle: 'bold'
  },
  inputBorder: {
    backgroundColor: 'lightblue',
    width: 200,
    borderRadius: 30,
    alignSelf: 'center',
    margin: 20
  },
  login: {
    margin: 50,
    marginBottom: 0,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 23,
    textAlign: 'center'
  },
  button: {

  }

});

export default function Middle() {
  return (
    
      <View>
      
      
      
      <View style= {styles.imbg}> 
        <Image
        style={styles.image}
        source={diamond3}
      />
      </View> 
      <ScrollView> 
      <LinearGradient
        colors={['skyblue', 'white']}
        style={styles.container}
        start={{ x: -2, y: 0 }}
        end={{ x: 1, y: 1 }}
      > 
      <Text style={styles.login}> Login </Text>
      <View style= {styles.inputs}>
        <View style = {styles.inputBorder}> 
          <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
        </View>
      <View style= {styles.inputBorder}>   
      <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      </View>
       
      <Button style= {styles.button} title= "Forgot Password?" onPress={()=> alert("Welcome")}> </Button> 
      

      </LinearGradient>

        {/* <LinearGradient start={{x: -1, y: -1}} end={{x: 3, y: 3}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <Text style={styles.text}>
        Smart Bucks
      </Text>
      </LinearGradient> */}
      </ScrollView>
      
      {/* <LinearGradient style={styles.footer}
        colors={['purple', 'white']}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Button style= {styles.ftext} title= "Foot" onPress={()=> alert("Welcome")}> </Button> 
        <Button style= {styles.ftext} title= "Foot" onPress={()=> alert("Welcome")}> </Button> 
      </LinearGradient> */}
    </View>
    
    
    

  );
}
{/* <ImageBackground
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
      {/* <Image
        style={styles.image}
        source={trade}
      />
      <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground> */}

//   uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        // 

//   logo: {
//     paddingBottom: 100,
//     width: 5
//   },

{/* <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View> */}