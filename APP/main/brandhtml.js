
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
  TextInput,
  WebView,
  TouchableOpacity,
  Navigator
} from 'react-native';

let {width,height}=Dimensions.get('window');

import Swiper from 'react-native-swiper';

var Icon=require('react-native-vector-icons/FontAwesome')

import Loadding from '../second/load';

export default class index extends Component {
  constructor(props){
    super(props)
    ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state={
      
    }
   
  };

goTo(title){
  this.props.navigator.push({
        name:title,
        component:Loadding,
        para:{
          name:title
        } 
    })
}

render() {
    let line_list=this.props.data.data.line_list;
    let branch_list=this.props.data.data.branch_list;
    console.log(line_list);
    return (
          <View style={Styles.citylist}>
              <View style={Styles.seek}>
                  <ScrollView  horizontal={true}
                  >
                    {
                      line_list.map((value,key)=>{
                        return <TouchableOpacity key={key} onPress={this.goTo.bind(this,value.line_name)}>
                          <View style={Styles.city}>
                            <Image  source={{uri:'http://101.201.211.41:8088'+value.pic}}
                                    style={{width:50,height:40}}
                            />
                            <Text style={Styles.cityname}>{value.line_name}</Text>
                          </View>
                        </TouchableOpacity>
                      })
                    }
                  </ScrollView>
                                                          
              </View>

              <View style={Styles.brand}>
                  <View style={Styles.branditem}>
                    <View>
                      <Image source={require('../../source2/邮轮品牌.png')}
                          style={{width:93,height:26,marginLeft:10,marginTop:5}}
                      />
                    </View>
                    <ScrollView style={{height:80,marginTop:10,marginLeft:10}}
                        horizontal={true}
                    >
                       {
                          branch_list.map((value,key)=>{
                            return <TouchableOpacity key={key}>
                              <View style={Styles. brandlist}>
                                <Image  source={{uri:'http://101.201.211.41:8088'+value.logo}}
                                        style={{width:120,height:80}}
                                />
                              </View>
                            </TouchableOpacity>
                          })
                        }

                    </ScrollView>
                  </View>
              </View>
              
          </View>

          

          
    );
  };
 
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
const Styles= StyleSheet.create({
  seek:{
    height:110,
    position:'relative',
  },
 
  citywrap:{
    width:width,
    flexDirection:'row'
  },
  city:{
      width:62,
      height:110,
      marginRight:40,
      alignItems:'center',
      justifyContent:'flex-start',
      paddingTop:30,
  },
  cityname:{
    fontSize:12,
    marginTop:13,
    textAlign:'center'
  },

  brand:{
    width:width,
    height:155,
    backgroundColor:'#dee5eb'
  },
  branditem:{
    height:135,
    backgroundColor:'white',
    marginTop:10
  },
  brandlist:{
    width:120,
    height:80,
    marginRight:10
  }
});

module.exports=index;
