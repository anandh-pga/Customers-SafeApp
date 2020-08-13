import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {StyleSheet,View,Text,Image, TouchableOpacity,Alert} from 'react-native';
// import Welcome from '../customerapp/welcome';
// import Offer from '../customerapp/offer';
// import Notification from '../customerapp/notification';
// import { createAppContainer, } from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from 'react-navigation';
// import { createStackNavigator} from '@react-navigation/stack';
// import { StackNavigator } from "react-navigation";
// import {Actions} from "react-native-router-flux";
// import BookingScreen from './homeprofile';
import NotificationsCarousal from './notificationCorousal';
import OfferCarousal from './offerCorousal';
import { Title } from 'react-native-paper';



class Dashboard extends Component {
    constructor() {
        super();
        this.state={
            greeting:''
        }
      }


    componentDidMount(){
        const renderWelcomeMsg = (currentTime = new Date()) => {
            const currentHour = currentTime.getHours()
            const splitAfternoon = 12; // 24hr time to split the afternoon
            const splitEvening = 17; // 24hr time to split the evening
          
            if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
              // Between 12 PM and 5PM
              return 'Good Afternoon';
            } else if (currentHour >= splitEvening) {
              // Between 5PM and Midnight
              return 'Good Evening';
            }
            // Between dawn and noon
            return 'Good Morning';
          }
        let Time = renderWelcomeMsg()
        this.setState({greeting:Time})
    }
   
    render() {

        return (
       
        <View style={styles.container}>
           <View style={styles.welcome}>
                <View style={styles.welcontent}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{this.state.greeting}</Text>
                    <Image style={styles.welcome_icon} source={require('../assets/call-center-agent.png')} size={20}/>
                    </View>
                        <Text style={{color:'blue',fontSize:25,textAlign:'center'}}>Mr.saravanan</Text>
                    <Text style={{ color:'green',fontSize:15,textAlign:'center',marginVertical:10}}>Our offer was almost reasonable. </Text>
                </View>
           </View>
           <View style={styles.offers}>
               <View style={{alignItems:'center'}}>
               <Text style={{fontSize:20,fontWeight:'bold',color:'tomato'}}>Offers</Text>
               </View>
                 <OfferCarousal/>

           </View>
           <View style={styles.notifications}>
           <View style={{alignItems:'center'}}>
                
                <Text style={{fontSize:20,fontWeight:'bold',color:'tomato'}}>Notifications</Text>
                </View>

           <NotificationsCarousal/>

           </View>

        </View>
        )

    }
    
  

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    welcome:{
        flex:3,
        backgroundColor:'tomato',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    offers:{
        flex:3,
        marginTop:'15%',
        padding:10




    },
    notifications:{
        flex:3,
        // marginTop:10,
        padding:10,
        marginBottom:15


    },
    welcome_icon:{
        height:30,
        width:30,
        marginLeft:10
        
    },
    welcontent:{
        padding:10,
        backgroundColor:'white',
        width:'60%',
        height:'70%',
        borderRadius:20,
        marginTop:'40%'

    },
    namecontent:{
        flex:1,
        marginLeft:200

    },
    infocontent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },

    // card:{
    //     padding:20,
    //     borderRadius:6,
    //     elevation:3,
    //     backgroundColor:'#fff',
    //     shadowOffset:{width:1,height:1},
    //     shadowColor:'#333',
    //     shadowOpacity:0.3,
    //     alignItems:'center',
    //     margin:12,
    //     height:200,
    //     justifyContent:'center',
    //     shadowRadius:2,
      
    // },
    // cardContent:{
    //     marginHorizontal:10,
    //     backgroundColor:'blue',


        
    // }

  

});
export default Dashboard