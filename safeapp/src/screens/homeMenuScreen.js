import 'react-native-gesture-handler';
import React,{Component,useState} from 'react';
import icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import call from 'react-native-phone-call';


import { View,
    Text,
    StyleSheet,
    // TextInput,
    TouchableOpacity,
    // Button,
    // Animated,
    // ScrollView,
    Image,
    // Dimensions,
    // Modal,
    Linking,
} from 'react-native';
import Dashboard from './homeMenuDashboard';
import { YellowBox } from 'react-native';
import { color } from 'react-native-reanimated';
import { Card } from 'react-native-elements'
import BookingTab from './bookingTab';
import BookingModel from './bookingModal'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomerProfile from './homeMenuCustomerProfile';
import { Title } from 'react-native-paper';


// YellowBox.ignoreWarnings([
//   'Require cycle:'
// ])



function HomeScreen(){
    
    return (
      <Dashboard />
    )

}



function BookingScreen(){

    return (
        <View style={styles.booking_container}>
                <View style={{
                height:'10%',
                backgroundColor:'tomato',
                width:'100%',
                justifyContent:'center',
                padding:10,
                fontWeight:'bold',color:'white',
                // alignItems:'center'
                }}>
                <Title style={{marginTop:25,fontWeight:'bold',color:'white',}}>Booking</Title>
        </View>
            <View style={styles.booking_tab}>
                <BookingTab/>
            </View>
            <View style={styles.booking_add}>
                        <BookingModel/>
            </View>
        </View>

    )

}



function ProfileScreen () {

    return (
            <CustomerProfile/>
    )

}


export class AboutScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mobile_no: 8754444875,
      //   msg: '',
      };
    }
    sendOnWhatsApp=() => {
      // let msg = this.state.msg;
      let mobile = this.state.mobile_no;
      if(mobile){
          let url = 'whatsapp://send?phone=91=' + mobile;
          Linking.openURL(url).then((data) => {
            console.log('WhatsApp Opened');
          }).catch(() => {
            alert('Make sure Whatsapp installed on your device');
          });
      //   else{
      //     alert('Please insert message to send');
      //   }
      }
      // else{
      //   alert('Please insert mobile no');
      // }
    }

    call = () => {
        //handler to make a call
        const args = {
          number: '8754444875',
          prompt: false,
        };
        call(args).catch(console.error);
      };
    render() {
      return (
        <View style={styles.container}>
      
  <View>
                  <Title>About</Title>
                  </View>
                  <View>
                      <Text style={{paddingLeft:35,marginTop:10}}>
                          In 2017 we started,We are the leading experts in that service, we are done and doing so many
                          services for everyone who needs our Help
                      </Text>
                      <Text style={{paddingLeft:35,marginTop:10}}>
                       we are give the best for you and also we done in a correct time for your need
                      </Text>
                      <Text style={{paddingLeft:35,marginTop:10}}>
                       If you have any struggle during registration or any other trouble kindly contact us 8754444875
                      </Text>
                      <Text style={{paddingLeft:35,marginTop:10}}>
                       Thank you  
                      </Text>
                  </View>
          <View style={{marginTop:20}}>
            {/* <Button
              onPress={this.sendOnWhatsApp}
              title= 'Send WhatsApp Message'
              /> */}
            <Text style={{fontSize:14,fontWeight:'bold'}}>If any Enquiry you can contact immediately here</Text>
            <View style={styles.iconView}>
            <TouchableOpacity  onPress={this.sendOnWhatsApp}>
                <Image
                    style={styles.whatsap_logo}
                    source={require('../assets/whatsapp.png')}/>
            </TouchableOpacity>
            <Text style={{marginTop:20}}> Msg or Call</Text>
            <TouchableOpacity  onPress={this.call}>
                <Image
                    style={styles.phone_logo}
                    source={require('../assets/phone.png')}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
  
         
    



const styles = StyleSheet.create({
    regform:{
        alignSelf:'stretch',
        padding:20,   flex: 1,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
    },
    header:{
        fontSize:20,
        color:'#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#199187',
        borderBottomWidth:1,
         
    },
    textinput:{
        alignSelf:'stretch',
        height:40,
        marginBottom:30,
        color:'#fff',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
    },
    Button:{
        // alignSelf:'stretch',
        // alignItems:'center',
        // padding:20,
        // backgroundColor:'#59cbbd',
        // marginTop:30,
        width:250,
        height:50,
        backgroundColor:'#330066',
        borderRadius:30,
        justifyContent:'center',
        marginTop:15
    },
    btntext:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },

    text:{
        fontSize:18,
        color:'white',
        textAlign:'center',

    },
    whatsap_logo:{
            width:85,
            height:80,
    },
    phone_logo:{
        width:70,
        height:70,

    },
    iconView:{
        flexDirection:'row',
        height:300,
        justifyContent:'space-between',
        marginTop:10

    },

    //animated view

    //new booking

    booking_notification:{
    },

    modalToggle:{
        borderWidth:3,
        borderColor:'#5085ff',
        padding:12,
        borderRadius:40,
        alignSelf:'center',
        color:'#1c56db',
     
    },
    modalCloseToggle:{
        borderWidth:3,
        borderColor:'#5085ff',
        padding:12,
        borderRadius:40,
        alignSelf:'center',
        color:'#1c56db',
        marginTop:2,

    },

    booking_container:{
        flex:1,
     
    },
    booking_tab:{
        flex:8
    },
    booking_add:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'blue',

    },
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    }


 


})

const AppTabs = createBottomTabNavigator();
const AppTabsScreen=()=> (
    
        <AppTabs.Navigator
          initialRouteName="Home"
          barStyle={{ backgroundColor: 'tomato' }}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: '#808080',
            style: {
                backgroundColor: 'white',
                // backgroundColor: '#694fad',

              },

              labelStyle: {        
                fontSize: 12,        
               }    
          }}
       
        
       
        >
        <AppTabs.Screen 
            component={HomeScreen}
            name="Home"
     
            
            options={{
              
            headerBackTitle: null,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <Icon   size={25} color={color} name={'md-home'}></Icon>
            ),
           

        
        }}
        />

          <AppTabs.Screen 
          name="Booking" 
          component={BookingScreen} 
     options={{
                title:'Home',
                tabBarLabel: 'Booking',
                tabBarIcon: ({ color }) => (
                    <Icon  size={25} color={color} name={'md-calendar'}></Icon>

                ),
                }} 
               
                />

          <AppTabs.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            headerStyle: {
                backgroundColor: 'red',
              },
            tabBarIcon: ({ color }) => (
                <Icon  size={25}  color={color} name={'md-person'}></Icon>

            ),
            }}
        />

          <AppTabs.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
                <Icon  size={25}  color={color} name={'md-help'}></Icon>

            ),
            }}
        />

        </AppTabs.Navigator>
        )

    export default ()=>(
        <NavigationContainer>
        <AppTabsScreen/>
    </NavigationContainer>
    )
    
    
  
  

