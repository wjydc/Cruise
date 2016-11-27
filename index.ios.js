/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  ActivityIndicator,
  TextInput,
  Dimensions
} from 'react-native';

let {width,height}=Dimensions.get('window');
var Icon=require('react-native-vector-icons/FontAwesome');

import Request from './APP/request';
import Banner from './APP/main/bannerhtml';
import Brand from './APP/main/brandhtml';
import Hot from './APP/main/hotrecommend';

let top=150
class Index extends Component{

  constructor(props){
    super(props)
    this.state={
        isfixed:false
    }
  }
  onscroll(event){
      let data=event.nativeEvent;
      if (data.contentOffset.y>=top){
        this.setState({
          isfixed:true
        })
      }else{
        this.setState({
          isfixed:false
        })
      }
  }
  render(){
    return(
      <ScrollView stickyHeaderIndices={[0]} scrollEventThrottle={200} onScroll={this.onscroll.bind(this)}>
        {
          this.state.isfixed?
            <View style={styles.searching}>
              <View style={styles.citywording}>
                <TextInput style={styles.keywording}
                    placeholder="请输入邮轮目的地/关键字"
                    placeholderTextColor="#cacbcc"
                />
              </View>
              <Icon  style={styles.iconing}
              name="search"
              color="lightgray"
              size={20}
              />
          </View>
          :<View style={styles.search}>
              <View style={styles.cityword}>
                <TextInput style={styles.keyword}
                    placeholder="请输入邮轮目的地/关键字"
                    placeholderTextColor="#cacbcc"
                />
              </View>
              <Icon  style={styles.icon}
              name="search"
              color="lightgray"
              size={20}
              />
          </View>
        }
          
        <Banner navigator={this.props.navigator} data={this.props.data.slider}/>
         
        <Brand navigator={this.props.navigator} data={this.props.data.brand}/>
        <Hot navigator={this.props.navigator} data={this.props.data.brand}/>
      
      </ScrollView>

    )
  }
}

export default class Cruise extends Component {
  constructor(props){
    super(props)
    this.state={
      slider:'',
      brand:'',
      hot:'',
      listview:''
    }
    this._fetchData()
  }

  _fetchData(){
    var that=this;
    // 轮播图
    // https://www.weilv100.com/api/ad/ad_img_show/75/149
    Request.get('https://www.weilv100.com/api/ad/ad_img_show/75/149')
      .then(function(response){
        that.setState({
          slider:response
        })
      })
    // 第二部分
    // http://101.201.211.41:8088/api/cruisenew/index
    Request.post('http://101.201.211.41:8088/api/cruisenew/index')
    .then(function(response){
        that.setState({
          brand:response
        })
      })
    // 第三部分
    https://www.weilv100.com/api/appHome/getHomeInfo?city_id=149&assistant_id=0
    Request.get('http://101.201.211.41:8088/api/cruisenew/product_list')
      .then(function(response){
        that.setState({
          hot:response
        })
      })

    // 详情页
    // http://101.201.211.41:8088/api/cruisenew/index
    // Request.get('http://101.201.211.41:8088/api/cruisenew/index')
    //   .then(function(response){
    //     that.setState({
    //       listview:response
    //     })
    //   })
   }

  render(){ 

    return (
        
        <View style={styles.container}>
          {
           this.state.slider&&this.state.brand&&this.state.hot?
            <Navigator
                initialRoute={{
                  name:'首页',
                  component:Index
                }}
            configureScene={(route)=>{
              let confg=Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
              // 禁止手势滑动
              confg.gestures = null;
              return confg
            }}
            renderScene={(route,navigator)=>{
              let Component=route.component;
              return ((<Component {...route.para} navigator={navigator} data={{slider:this.state.slider,brand:this.state.brand,}} datas={{hot:this.state.hot}}/>)
                )
            }}
            />
          :<View style={styles.loadding}>
            <ActivityIndicator
                size='large'
            />
            <Text style={{marginTop:10}}>加载中....</Text>
          </View>
         
          }
        </View>
    );
  };
 
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
  },
  loadding:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  search:{
    width:350,
    height:38,
    position:'absolute',
    top:150,
    left:12,
    zIndex:10
  },
  cityword:{
     width:350,
    height:38,
    borderWidth:1,
    borderColor:'lightgray',
    borderRadius:10,
    position:'absolute',
   
    backgroundColor:'white',
    zIndex:10
  },
  keyword:{
    width:300,
    height:36,
    backgroundColor:'white',
    borderRadius:10,
    position:'absolute',
    left:35,
  },
   icon:{
    position:'absolute',
    top:8,
    left:10,
    zIndex:15
  },
  searching:{
    width:width,
    height:85,
    borderBottomWidth:1,
    borderBottomColor:'gray',
    backgroundColor:'white',
    position:'relative'
  },
  citywording:{
    width:290,
    height:38,
    backgroundColor:'rgb(230,237,248)',
    borderRadius:5,
    position:'absolute',
    left:43,
    top:25
  },
  keywording:{
    width:250,
    height:36,
    backgroundColor:'rgb(230,237,248)',
    borderRadius:5,
    position:'absolute',
    left:30
  },
  iconing:{
    position:'absolute',
    top:33,
    left:50,
    zIndex:15,
    backgroundColor:'transparent'
  }
});

AppRegistry.registerComponent('Cruise', () => Cruise);
