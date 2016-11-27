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
  Navigator
} from 'react-native';

let {width,height}=Dimensions.get('window');

import Detailing from '../second/detailstorehouse.js';

var Icon=require('react-native-vector-icons/FontAwesome')

class Index extends Component {
  constructor(props){
    super(props)
    this.state={
    }  
  };
 gotoDatail(pic){
     this.props.navigator.push({
        name:pic,
        component:Detailing,
        para:{
          name:pic
        } 
    })

 }
  render(){
    let hot=this.props.data.data.tuijian_list;
   
    return(
      
      <View style={Styles.hotrecommend}>
        <View style={Styles.title}>
              <View style={{flexDirection:'row',marginLeft:10}}>
                <Image source={require('../../source2/热推产品.png')}
                    style={{width:25,height:25,marginTop:8}}
                />
                <Text style={{fontSize:13,lineHeight:40,marginLeft:10}}>热推产品</Text>
              </View>
                
              <View style={{flexDirection:'row',marginRight:10}}>
                <Text style={{fontSize:13,lineHeight:40,marginRight:10}}>更多</Text>
                <Image source={require('../../source2/更多.png')}
                style={{width:12,height:12,marginTop:14}}
                />
              </View>
        </View>
        <ScrollView>
              {
                  hot.map((value,key)=>
                <TouchableOpacity key={key} onPress={this.gotoDatail.bind(this,'http://101.201.211.41:8088'+value.thumb)}>
                  <View  style={Styles.listWrap}>
                    <View style={Styles.picture}>
                      <Image source={{uri:'http://101.201.211.41:8088'+value.thumb}}
                        style={{width:355,height:165}}                
                      />
                      </View>
                      <View style={Styles.makeorder}>
                        <View style={{flexDirection:'row',marginLeft:10}}>
                          <Image source={require('../../source2/港口-列表.png')}
                              style={{width:15,height:15,marginTop:5}}
                          />
                          <Text style={{color:'white', lineHeight:26,marginLeft:6}}>{value.port_name}出发</Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../../source2/报名日期-列表.png')}
                              style={{width:15,height:15,marginTop:5}}
                          />
                          <Text style={{color:'white', lineHeight:26,marginLeft:6}}>请提前{value.advance_day}天报名</Text>
                        </View>
                        
                        <View style={{flexDirection:'row',marginRight:10}}>
                          <Image source={require('../../source2/已收藏.png')}
                              style={{width:20,height:20,marginTop:3}}
                          />
                        </View>
                      </View>
                      <View style={Styles.message}>
                          <Text style={{fontSize:14,lineHeight:20}}>{value.product_name}</Text>
                          <View style={Styles.price}>
                            <View style={{flexDirection:'row'}}>
                              <Image source={require('../../source2/邮轮12-副本.png')}
                                style={{width:15,height:15}}
                              />
                              <Text style={{fontSize:11,marginLeft:10,color:'#a0a0a0',lineHeight:20}}>{value.brand_name}-{value.ship_name}</Text>
                            </View>
                            <View style={{flexDirection:'row',marginRight:10}}>
                                <Text style={{fontSize:13,color:"orange"}}>￥</Text>
                                <Text style={{fontSize:16,color:"orange",marginTop:-3}}>{value.min_price}</Text>
                                <Text style={{fontSize:13}}>起</Text>
                            </View>
                          </View>
                      </View>
                  </View>
                </TouchableOpacity>
                    )
              }
            
        </ScrollView>
         <View style={{flexDirection:'row',justifyContent:'center',marginBottom:20}}>
          <Text style={{fontSize:20}}>查看更多</Text>
          <Image source={require('../../source2/更多.png')}
              style={{width:20,height:20}}
          />
        </View>
      </View>

    )
  }

};


const Styles= StyleSheet.create({
  hotrecommend:{
    flex:1
  },
  title:{
    height:40,
    flexDirection:'row',
   justifyContent:'space-between'
  },
  listWrap:{
    width:355,
    height:241,
    marginLeft:10,
    position:'relative',
    marginBottom:10
  },
  picture:{
    width:355,
    height:165,
    backgroundColor:'white'
  },
  makeorder:{
    width:355,
    height:26,
    backgroundColor:'black',
    opacity:0.8,
    position:'absolute',
    bottom:74,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  message:{
    borderWidth:1,
    borderTopColor:'transparent',
    borderBottomColor:'lightgray',
    borderLeftColor:'lightgray',
    borderRightColor:'lightgray',
    paddingLeft:8,

  },
  price:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

module.exports=Index;













