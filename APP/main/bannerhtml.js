import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  WebView,
  TouchableOpacity,
  Navigator,
Linking
} from 'react-native';

let {width,height}=Dimensions.get("window");
import Swiper from 'react-native-swiper';
var Icon=require('react-native-vector-icons/FontAwesome');

import Detail from '../second/detailstorehouse';

class index extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  };

  // GoToDetail(way,til){
  //     this.props.navigator.push({
  //       name:way,
  //       word1:til,
  //       component:Detail,
  //       para:{
  //         name:way,
  //         word1:til
  //       }
  //   })
  // }
  GoToDetail(a){
      // let list=this.props.data;
          Linking.openURL(a)      
  }
  render() { 
    let list=this.props.data;
    return (
      <View style={Styles.header}>
        <Icon style={Styles.icon}
          name="backward"
          color='gray'
          size={30}
        />
           <Swiper
            autoplay={true}
            height={170}
            >
            {
              list.map((value,key)=>{
                return <TouchableOpacity key={key} onPress={this.GoToDetail.bind(this,value.link)}>
                <View >
                  <Image 
                    source={{uri:'http://www.weilv100.com'+value.src}}
                    style={Styles.pic} />
                </View>
              </TouchableOpacity>
              })
            } 
            </Swiper>
      </View>
    );
  };

  
}

const Styles = StyleSheet.create({
  header:{
    width:width,
    height:170,
  },
  icon:{
    position:'absolute',
    top:30,
    left:11,
    zIndex:10,
    backgroundColor:'transparent'
  },
  pic:{
    width:width,
    height:170
  }
  
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
module.exports=index;