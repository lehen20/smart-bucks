import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import trade from '.././assets/trade.png'


const styles = StyleSheet.create({
  container: {
        // flex: 1,
        width: 200, 
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

const Middle = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
      <Image
        style={styles.image}
        source={trade}
      />
      <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default Middle;


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