import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Login extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Image style={styles.logo}
          source={require('../assets/abc.png')}
          />
          <Text style={styles.title}>PG analytics</Text>

        </View>
        <View style={styles.inputcontainer}>
          <Text style={{fontSize:17,color:'white',marginLeft:'11%'}}>Enter your Mobile number</Text>
            <View style={styles.inputview}>
              <Text style={styles.prefix}>+91</Text>
              <TextInput
              style={styles.input}
              keyboardType="numeric"
              underlineColorAndroid={'transparent'}

              />
            </View>
          <View style={styles.submit}>
            <TouchableOpacity style={styles.login_arrow} onPress={()=>this.props.navigation.navigate('OTP')}>
                <Icon name="arrow-right" color='white' size={24}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )

  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#4834DF',
    width:Dimensions.get('window').width,
  },
  logocontainer:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
  },
  logo:{
    width:100,
    height:100
  },
  inputcontainer:{
    // borderColor:'white',
    // borderWidth:1,
    flex:2,
    padding:20,
  },
  welcome:{
    marginBottom:15,
    fontWeight:'bold',
    fontSize:20,
    color:'white'
  },
  title:{
    marginTop:15,
    color:'#fff',
    fontWeight:'bold',
    fontSize:20,
    color:'white'

  },
  inputview:{
    // flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginTop:15
  },
  input:{
      flex:1,
      height:40,
      backgroundColor:'rgba(255,255,255,0.8)',
      borderColor:'green',
      borderBottomWidth:1,
      borderRadius:5,
      marginLeft:5,
      padding:7
  },
  prefix:{
    fontSize:20,
    color:'green',
    fontWeight:'bold',
    color:'black'
    
  },
  submit:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  },
  login_arrow:{
    height:50,
    width:50,
    // backgroundColor:'#4444ff',
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35,
  }


})

export default Login
