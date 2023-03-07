import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Box } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from './components/Header'
import Middle from './components/Middle'
import Footer from './components/Footer'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Tab.Navigator>
      {/* <Tab.Screen name="Account" component={Footer} /> */}
      <Tab.Screen style= {styles.container} name="Home" component={Middle}
          options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color='black' />
            ), 
              title: 'Smart Bucks',
              headerStyle: {
                backgroundColor: 'lightgrey',
              },
              headerTintColor: 'grey',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Helvetica',
                fontSize: 25, 
                marginTop: 15
              }
          }} />
      
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    flexDirection: "row",
    backgroundColor: "gold"
  },
});

// export default function App() {
//   return (
//     <View>
//       {/* <Tasks name= "Header"/> */}
//       {/* <StatusBar style="auto" /> */}
//       {/* <Footer name= "Footer"/> */}
//       <Middle/>
//       <Footer/>
      
//     </View>

//   );
// }

