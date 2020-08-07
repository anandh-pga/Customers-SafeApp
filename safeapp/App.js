

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
import loginScreen from './src/screens/loginScreen';
import OTPScreen from './src/screens/OTPscreen';
import homeMenuScreen from './src/screens/homeMenuScreen';


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
      // headerShown: false
      title:'Home',
      headerBackgroundColor:'tomato'
    }

  },

   
},

{

initialRouteName:'Login',
// defaultNavigationOptions:{
// title:'Blogs'
// } 
  
},
);

const App = createAppContainer(navigator);

export default App;
