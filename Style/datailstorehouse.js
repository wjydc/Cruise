import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ListView,
  TouchableOpacity,
  TouchableHighlight,
  Navigator
} from 'react-native';

let {width,height}=Dimensions.get('window');

const Styles=StyleSheet.create({
  contanier:{
    flex:1,
    backgroundColor:'rgb(214,223,229)'
  },
  header:{
    // height:350,
    backgroundColor:'white'
  },
  picture:{
    width:width,
    height:200,
    position:'relative',
    top:0,
    left:0,
    backgroundColor:'lightgreen'
  },
  PIC:{
    width:35,
    height:35,
    position:'absolute',
    top:25,
    left:10,
    borderRadius:17
  },
  pic:{
    width:35,
    height:35,
    position:'absolute',
    top:25,
    right:10
  },
  date:{
    width:width,
    height:26,
    position:'absolute',
    bottom:0,
    backgroundColor:'black',
    opacity:0.4,
    zIndex:100,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  title:{
    height:89,
    borderBottomWidth:1,
    borderBottomColor:'gray',
    paddingLeft:13,
    paddingTop:13,
    position:'relative'
  },
  moneyback:{
    width:70,
    height:16,
    borderWidth:1,
    borderColor:'rgb(93,164,230)',
    borderRadius:8,
    flexDirection:'row',
    position:'absolute',
    top:62,
    right:10
  },
  fan:{
    // marginRight:17,
    // marginLeft:-20
  },
  serialnumber:{
    // height:60,
    paddingLeft:13,
    position:"relative"
  },
  arrow:{
    width:13,
    height:7,
    position:'absolute',
    bottom:14,
    right:10
  },
  message:{
    // height:125,
    marginTop:15,
    backgroundColor:'white'
  },
  messagelist:{
    width:width,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'gray',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  house:{
    width:110,
    height:40,
    borderBottomWidth:2,
    borderBottomColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:38,
    
  },
  tour:{
    width:110,
    height:40,
    borderBottomWidth:2,
    marginRight:38,
    justifyContent:'center',
    alignItems:'center',
   borderBottomColor:'transparent',
  },
  special:{
    position:'relative'
  },
  cabin:{

    height:94,
    marginTop:15,
    backgroundColor:'white'
  },
  housemessage:{
    width:width,
    height:75,
    paddingLeft:10,
    paddingTop:10,
    flexDirection:'row'
  },
  size:{
      width:185,
      height:75,
      borderRightWidth:1,
      borderRightColor:'rgb(200,200,200)',
      marginLeft:10,
      position:'relative'
  },
  check:{
    width:92,
    height:75,
    justifyContent:'center',
  },
  order:{
    height:130,
    marginTop:15,
    backgroundColor:'white',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  orderlist:{
    width:width*0.5,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'rgb(213,213,213)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth:1,
    borderRightColor:'rgb(213,213,213)'

  },
  reserve:{
    width:0.2*width,
    height:50,
    borderRightWidth:1,
    borderRightColor:'rgb(213,213,213)',
    justifyContent:'center',
    alignItems:'center'
  },
  firstorder:{
    width:0.6*width,
    height:50,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center'
  },


// 分享
wrap:{
width:width,
height:height,
position:'absolute',
zIndex:-1,
left:0,
top:0,
backfaceVisibility:'hidden'
},
share:{
  width:width,
  height:height,
  backgroundColor:'black',
  opacity:0.4,
  position:'absolute',
 
},
sharecarrier:{
  width:width,
  height:200,
  backgroundColor:'white',
  position:'absolute',
  bottom:0,
  zIndex:100,
  paddingTop:20,

},
font:{
  fontSize:11,
  color:'#6f7378',
  marginTop:10
},
shareinput:{
  width:350,
  height:45,
  marginLeft:12,
  marginTop:20,
  borderRadius:5,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgb(155,165,173)'
}





















});

module.exports=Styles;