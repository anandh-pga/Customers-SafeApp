import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  DatePickerIOSComponent,
} from "react-native";
// import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/Ionicons';
// import BookingTime from './bookingTime'
import Modal from "react-native-modal";

const BookingModel = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('Mr.Saravanan');
  const [description, setDescription] = useState('');


  const onDateChange=(date)=>{
      console.log(date)
      setDate(date);
  }

  const onTimeChange=(time)=>{
      console.log(time)
      setTime(time)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        // animationType="fade"
        // transparent={true}
        isVisible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
    
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>

                  <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',width:'100%'}}>
                  <TouchableHighlight
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                  >
                  <Icon  size={35}  name={'ios-close-circle-outline'}></Icon>
                  </TouchableHighlight>
                  </View>

              <View style={{flex:17,padding:5,marginTop:3}}>
                
                  <View style={{flex:10,width:300}}>
                            <Text style={{marginLeft:10,color:'blue',fontWeight:"bold"}}>
                                For booking enter the details below
                                </Text>

                            <TextInput 
                                style = {styles.input}
                                underlineColorAndroid = "transparent"
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                value={name}
                                editable={false}
                            />

                            {/* <DatePicker style = {styles.input}
                                    // style={styles.date}
                                    mode="date"
                                    placeholder="select the date"
                                    format="DD-MM-YYYY"
                                    minDate="2020-05-01"
                                    maxDate="2020-12-31"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    showIcon={true}
                                    date={date}
                                    // iconSource={require('../assets/timeicon.png')}
                                    // onDateChange={(date) => {console.log(date)}}
                                    onDateChange={(date) => {onDateChange(date)}}
                                />  

                            <DatePicker style = {styles.input}
                                    // style={styles.time}
                                    mode="time"
                                    format="hh:mm-a"
                                    placeholder="select the time"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    is24Hour={false}
                                    date={time}
                                    iconSource={require('../assets/timeicon.png')}
                                    onDateChange={(time)=>{onTimeChange(time)}}
                                />  */}
                                
                                <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                // value={date}
                                placeholder = "date"
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                maxLength={50}
                                />

                                
                                <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                // value={time}
                                placeholder = "time"
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                maxLength={50}
                                />

                                <TextInput style = {{...styles.input,height:200,justifyContent:'flex-start',textAlignVertical: 'top'}}
                                underlineColorAndroid = "transparent"
                                // value={description}
                                placeholder = "Description"
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                multiline={true}
                                maxLength={50}
                                />
                  </View>
                </View>

            <View style={{flex:2}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#4444ff",padding:10 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >

              <Text style={styles.textStyle}>submit</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      
      <View style={styles.add_view}>
      <TouchableHighlight
        style={styles.add_button}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Icon  size={30} color={'white'} name={'md-add-circle-outline'}></Icon>

        {/* <Text style={styles.textStyle}>Book</Text> */}
      </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding:15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:340,
    height:645

  },
  openButton: {
    // backgroundColor: "#F194FF",
    borderRadius:20,
    // padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  model_head:{
      fontSize:20,
      color:'blue',
      justifyContent:"center",
      alignItems:"center"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding:5,
    marginLeft:10,
    fontSize:15
 },
 add_view:{
  flex:1,
  justifyContent:'center',
  paddingLeft:20,
  alignItems:'center'
 },
 add_button:{
  height:50,
  width:50,
  backgroundColor:'#4444ff',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:35,
 },
 

});

export default BookingModel;
