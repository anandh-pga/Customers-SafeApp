import 'react-native-gesture-handler';
import React,{Component} from 'react';
//import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginScreen from './src/screens/loginScreen';
import OTPScreen from './src/screens/OTPscreen';
import homeMenuScreen from './src/screens/homeMenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>    
        <Stack.Screen name="loginScreen" component={loginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="homeMenuScreen" component={homeMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import loginScreen from './src/screens/loginScreen';
import OTPScreen from './src/screens/OTPscreen';
//import homeMenuScreen from './src/screens/homeMenuScreen';

const navigator = createStackNavigator(
  {

  Login:{
    screen:loginScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  OTP:{
    screen:OTPScreen,
    navigationOptions:{
      headerShown: false
    }

  },
  Menu:{
  screen:homeMenuScreen,
  navigationOptions:{
    title:'Home',
    headerTintColor: '#fff',
    headerLeft: null ,
    headerStyle: {
      backgroundColor: 'tomato',
    },
  },
},
},

{
initialRouteName:'Login',
defaultNavigationOptions:{
title:null,
headerBackgroundColor:'tomato'
} 
},
);


const App = createAppContainer(navigator);

export default App;
*/