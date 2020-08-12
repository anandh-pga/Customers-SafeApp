import React, { Component } from 'react'
import { Text, View,SafeAreaView,StyleSheet,Image, Alert } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class OfferCarousal extends Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
        carouselItems:[
          {image:require('../assets/card1.jpg'),text:"offer 1"},
          {image:require('../assets/card1.jpg'),text:"offer 2"},
          {image:require('../assets/card1.jpg'),text:"offer 3"},
          {image:require('../assets/card1.jpg'),text:"offer 4"},
          {image:require('../assets/card1.jpg'),text:"offer 5"},
        ]
      }
    }
   
    _renderItem({item,index}){
        return (
            <TouchableOpacity onPress={()=>Alert.alert(item.text)}>
          <View style={{
              // borderRadius:20,
              height: 150,
               }}>
            <Image source = {item.image} style={styles.image}/>
          </View>
          </TouchableOpacity>
        )
    }

    render() {
        return (
          <SafeAreaView>
            <View style={{ flexDirection:'row',width:400,height:200 }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={370}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
        // alignSelf: 'stretch',
        borderRadius:20,
    }
});

export default OfferCarousal
