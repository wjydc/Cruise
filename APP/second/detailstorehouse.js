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
  Navigator,
  TextInput
} from 'react-native';

let {width,height}=Dimensions.get('window');

var Icon=require('react-native-vector-icons/FontAwesome')
var ScrollableTabView = require('react-native-scrollable-tab-view');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

import Styles from '../../Style/datailstorehouse';

class Cfmessage extends Component{
  constructor(props){
    super(props)
    ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      this.state={
          dataSource:ds.cloneWithRows(['title':'122']),
      }
   
  }
  _render(){
      return(
        
          <View style={Styles.cabin}>
              <View style={Styles.housemessage}>
                  <Image 
                      style={{width:75,height:75,backgroundColor:'red'}}
                  />
                  <View style={Styles.size}>
                      <Text style={{fontSize:14,fontWeight:'bold',lineHeight:24}}>标准内舱3人房</Text>
                      <Text style={{color:'rgb(131,131,131)'}}>15m^,住3人，无窗</Text>
                      <View style={{flexDirection:'row',marginTop:21,position:'absolute',bottom:0}}>
                        <Text style={{color:'orange'}}>￥</Text>
                        <Text style={{fontSize:16,color:'orange',marginTop:-4}}>1860</Text>
                        <Text style={{color:'rgb(131,131,131)'}}>/人起</Text>
                      </View>
                  </View>
                  <View style={Styles.check}>
                    <Text style={{fontSize:13,color:'rgb(80,164,243)',textAlign:'center'}}>查看全部</Text>
                    <Text style={{fontSize:11,color:'#959595',textAlign:'center',marginTop:10}}>内舱房</Text>
                    <Text style={{fontSize:11,color:'#959595',textAlign:'center'}}>(共2种)</Text>
                  </View>
              </View>
          </View>

      )
    }
  render(){
    return(
      <ScrollView>
              <View style={Styles.message}>
                
                <View style={Styles.special}>
                  <View style={{flexDirection:'row',paddingLeft:10,paddingTop:10}}>
                    <Image source={require('../../source2/cruise_detail_product_tese.png')}
                        style={{width:20,height:20}}
                    />
                    <Text style={{fontSize:14,fontWeight:'bold',marginLeft:10,marginTop:3}}>产品特色</Text>
                  </View>
                  <Text style={{lineHeight:20,fontSize:11,marginTop:8,marginLeft:25}}>1. 采用星级航空公司豪华客机往返，安全舒适。</Text>
                  <Text style={{lineHeight:20,fontSize:11,marginLeft:25}}>2. 一次游玩菠罗的海岸最佳主要名城，美景醉人...</Text>
                  <Image source={require('../../source2/矩形-36.png')}
                          style={Styles.arrow}
                      />
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._render.bind(this)}
                    enableEmptySections={true}
                    automaticallyAdjustContentInsets={false}
                />
              </View> 
        </ScrollView>                                                                     
    )
  }
}

class Distancetravel extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <View>
        <ScrollView style={{backgroundColor:'white'}}>
            <Text style={{fontSize:14}}>第一天 昆明</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
              <Image source={require('../../source2/cruise_detail_tour_time.png')}
                      style={{width:17,height:17}}
              />
              <Text style={{fontSize:12,marginLeft:15}}>08:00抵达</Text>
              <Text style={{fontSize:12,marginLeft:60}}>12:00启航</Text>
            </View>
            <View style={{marginTop:10,flexDirection:'row'}}>
              <Image source={require('../../source2/cruise_detail_tour_ship.png')}
                      style={{width:17,height:17}}
              />
              <Text style={{marginLeft:15}}>登船</Text>
            </View>
            <View>
              <Text numberOfLines={2} style={{lineHeight:20,marginBottom:10}}>早上程序和简欧风如今积分我饿哦干么加工网附近付金额今积分我饿哦干么加工网今积分我饿哦干么加工网附今积分我饿哦干么加工网附近付金额今积分我饿哦干么加工网附近付金额近付金额附近付金额根据回复将佛法就经发局加法奇偶vgjjfejoigvnregjfejg1</Text>
            </View>
              
        </ScrollView>
      </View>
    )
  }
}





class detail extends Component{
    constructor(props){
      super(props)
      ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      this.state={
          dataSource:ds.cloneWithRows(['title':'123']),
          data:null,
          number:1,
          cengji:-1
      }
    };
    
    goback(){
      this.props.navigator.pop()
    }

    render(){
      console.log(this.props)
      return(
        <ScrollView>
          <View style={Styles.contanier}>
            <View style={Styles.header}>
                <View style={Styles.picture}>
                      <Image  source={{uri:this.props.name}}
                        style={{width:width,height:200}}
                      />
                      <TouchableHighlight style={Styles.PIC} onPress={this.goback.bind(this)}>
                        <Image source={require('../../source2/详情-返回.png')}
                             style={{width:35,height:35}}
                        />
                      </TouchableHighlight>
                      <TouchableOpacity style={Styles.pic} onPress={()=>{
                        this.setState({
                          cengji:100
                        })
                      }}>
                        <Image source={require('../../source2/详情-分享.png')}
                            style={{width:35,height:35}}
                        />
                      </TouchableOpacity>
                      <View style={Styles.date}>
                          <View style={{flexDirection:'row',marginLeft:12}}>
                            <Image source={require('../../source2/港口-列表.png')}
                                    style={{width:13,height:13,marginTop:5}}
                            />
                            <Text style={{color:'white',fontSize:13,marginLeft:5,lineHeight:20}}>上海出发</Text>
                          </View>
                          <Text style={{color:'white',fontSize:13,marginRight:12,lineHeight:20}}>2016年4月18日</Text>
                      </View>
                </View>
                <View style={Styles.title}>
                    <Text>{this.props.word1}</Text>
                    <View style={{flexDirection:'row',marginTop:18}}>
                        <Text style={{color:'orange',fontSize:14}}>微旅价:</Text>
                        <Text style={{color:'orange',fontSize:14}}> ￥</Text>
                        <Text style={{color:'orange',fontSize:16,marginTop:-4}}>5690</Text>
                    </View>
                    <View style={Styles.moneyback}>
                       
                        <Text style={Styles.fan}>返</Text>
                        <Text style={{color:'orange',fontSize:12}}>￥115</Text>
                        <Text style={{color:'gray',fontSize:12}}>起</Text>
                    </View>
                </View>
                <View style={Styles.serialnumber}>
                    <Text style={{fontSize:13,color:'#868686',marginTop:12}}>编号：b164464465454</Text>
                    <Text numberOfLines={this.state.number} style={{fontSize:13,color:'#868686',marginTop:12,width:0.8*width,lineHeight:20,marginBottom:10}}>本产品就覅万积分附件，你发我那个功能我积分我姐夫哥几个顾客平高科嘎嘎嘎两个感慨感慨感慨感慨</Text>
                    <TouchableHighlight style={Styles.arrow} onPress={()=>{
                       this.setState({number:3})
                        }  
                      }>
                      <Image source={require('../../source2/矩形-36.png')}
                            style={{width:13,height:7}}
                        />
                    </TouchableHighlight>
                </View>
            </View>

            <ScrollableTabView style={{width:width,borderBottomColor:'red'}}>
              <Cfmessage tabLabel='舱房信息' />
              <Distancetravel tabLabel='行程介绍'/>
            </ScrollableTabView>

           
            
            <View style={Styles.order}>
                <View style={Styles.orderlist}>
                  <Image source={require('../../source2/cruise_detail_yuding.png')}
                      style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:14,marginLeft:15}}>预订须知</Text>
                </View>

                <View style={Styles.orderlist}>
                  <Image source={require('../../source2/cruise_detail_fee.png')}
                      style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:14,marginLeft:15}}>费用说明</Text>
                </View>

                <View style={Styles.orderlist}>
                  <Image source={require('../../source2/cruise_detail_tuigai.png')}
                      style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:14,marginLeft:15}}>退改规则</Text>
                </View>

                <View style={Styles.orderlist}>
                  <Image source={require('../../source2/cruise_detail_qianzheng.png')}
                      style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:14,marginLeft:15}}>签证说明</Text>
                </View>

                <View style={Styles.reserve}>
                  <Image source={require('../../source2/cruise_detail_followed.png')}
                        style={{width:23,height:23}}
                  />
                  <Text style={{color:'orange',marginTop:5}}>已收藏</Text>
                </View>

                <View style={Styles.reserve}>
                  <Image source={require('../../source2/cruise_detail_phone.png')}
                        style={{width:23,height:23}}
                  />
                  <Text style={{marginTop:5}}>电话预定</Text>
                </View>

                <View style={Styles.firstorder}>
                    <Text style={{color:'white'}}>立即预定</Text>
                </View>
            </View>
          </View>




      <View style={{
          width:width,
          height:height,
          position:'absolute',
          zIndex:this.state.cengji,
          left:0,
          top:0,
      }}>
        <View style={Styles.share}></View>
        <View style={Styles.sharecarrier}>
          <Text style={{fontSize:15,textAlign:'center',marginBottom:22}}>分享到</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity>
              <Image source={require('../../source2/微信.png')}
                  style={{width:35,height:35}}
              />
              <Text style={Styles.font}>微信好友</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../source2/QQ.png')}
                  style={{width:35,height:35}}
              />
              <Text style={Styles.font}>QQ好友</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{justifyContent:'center'}}>
                <Image source={require('../../source2/微信朋友圈.png')}
                    style={{width:35,height:35}}
                />
                <Text style={Styles.font}>微信朋友圈</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../source2/QQ空间.png')}
                  style={{width:35,height:35}}
              />
              <Text style={Styles.font}>QQ空间</Text>
            </TouchableOpacity>
          </View>
          <TouchableHighlight onPress={()=>{
            this.setState({
              cengji:-1
            })
          }}>
            <View style={Styles.shareinput}>
              <Text style={{fontSize:15,color:'white'}}>取消</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      </ScrollView>
      )
    }

}

module.exports=detail;


