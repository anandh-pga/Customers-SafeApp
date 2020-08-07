import React from 'react'
import { Text, View,StyleSheet,ScrollView,SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card} from 'react-native-elements'


function ActiveScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={styles.scrollView}>
        <Card
        containerStyle={{height:165}}
            title='8-08-2020' 
            titleStyle={styles.cardTitle}
        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
   
        </Card>
        <Card
            title='31-09-2020'
            titleStyle={styles.cardTitle}
        containerStyle={{height:165}}

        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
      
        </Card>
        <Card
        containerStyle={{height:165}}

            title='3-10-2020'
            titleStyle={styles.cardTitle}
        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
    
        </Card>
        <Card
        containerStyle={{height:165}}

            title='3-10-2020'
            titleStyle={styles.cardTitle}
        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
        </Card>
        <Card
        containerStyle={{height:165}}

            title='13-10-2020'
            titleStyle={styles.cardTitle}
        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
        </Card>
        </ScrollView> */}
        </SafeAreaView>  
    );
  }
  
  function PastScreen() {
    return (
        <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.scrollView}>
                 <Card
            title='3-10-2020'
            titleStyle={styles.cardTitle}
        containerStyle={{height:165}}

        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
       
        </Card>
        <Card
            title='8-08-2020' 
            titleStyle={styles.cardTitle}
        containerStyle={{height:165}}

        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
   
        </Card>
        <Card
            title='31-09-2020'
            titleStyle={styles.cardTitle}
        containerStyle={{height:165}}

        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
      
        </Card>
        <Card
            title='3-10-2020'
            titleStyle={styles.cardTitle}
        containerStyle={{height:165}}

        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
       
        </Card>
        <Card
            title='3-10-2020'
            titleStyle={styles.cardTitle}
        containerStyle={{height:165}}

        >
        <Text style={{marginBottom: 10}}>
            Here we shows that something about the description of booking on this date
        </Text>
  
        </Card>
        </ScrollView> */}
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({

    cardTitle:{
        color:'red'
    },
    scrollView: {
        marginHorizontal: 20,
      },
      container: {
        flex: 1,
      },
})
  
  const Tab = createMaterialTopTabNavigator();
  
  export default function BookingTab() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Active" component={ActiveScreen} />
          <Tab.Screen name="Past" component={PastScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }



