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
  Animated,
  Easing
} from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');

let {width,height}=Dimensions.get('window');

var Icon=require('react-native-vector-icons/FontAwesome')
let Mock=require('mockjs');

class Index extends Component{
  constructor(props){
    super(props)
    ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state={
        dataSource:ds.cloneWithRows([]),
        data:null,
        show:new Animated.Value(0),
        offsetY:new Animated.Value(height)
    }
    this.getData1();
  };

  getData1(){
   fetch('http://101.201.211.41:8088/api/cruisenew/index')
      .then((response) => response.json())
      .then((responseJson)=>{
       
        let datas1=responseJson.data.line_list
        console.log(datas1)
        this.setState({
          dataSource:ds.cloneWithRows(datas1),
          data:datas1
        })
        
      })
      .catch((error) =>{
            console.error(error);
      });

};
  _render(rowData){
      return(
            <View style={Styles.shiproute}>
              <Image  source={{uri:'http://101.201.211.41:8088'+rowData.pic}}
                  style={{width:75,height:75,borderWidth:1,}}
              />
              <View style={Styles.listwrap}>
                  <View style={{flexWrap:'wrap'}}>
                    <Text >{rowData.line_name}</Text>
                  </View>
                  <View style={Styles.message}>
                    <View style={Styles.messagelist}>
                      <Image source={require('../../source2/报名日期-列表.png')}
                            style={{width:14,height:14}}
                      />
                      <Text style={Styles.fontcolor}>{rowData.line_id}</Text>
                    </View>
                    <View style={Styles.messagelist}>
                      <Image source={require('../../source2/港口-列表.png')}
                            style={{width:14,height:14}}
                      />
                      <Text style={Styles.fontcolor}>{rowData.line_id}出发</Text>
                    </View>
                  </View>
                  <View style={Styles.paychoise}>
                   
                      <Image source={require('../../source2/criuse_list_Screen_selected.png')}
                            style={{width:15,height:15,position:'absolute',zIndex:10}}
                      />
                      <Text style={Styles.text}>直接支付</Text>
                      <View style={{flexDirection:'row',position:'absolute',right:0}}>
                        <Text style={{color:'orange',}}>￥</Text>
                        <Text style={{color:'orange',fontSize:20,marginTop:-8}}>{rowData.line_id}</Text>
                        <Text>起</Text>
                      </View>
                      
                    
                  </View>
              </View>
            </View>
        );
  };

  goBack(){
    this.props.navigator.pop()
  }
  render(){
     if(this.state.data==null){
      return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>加载中</Text></View>
    }
    return(
        <View style={Styles.loadding}>
            <View style={Styles.title}>
              <TouchableHighlight onPress={this.goBack.bind(this)}
                style={{width:15,height:25,position:'absolute',left:13,top:30}}>
                <Image  source={require('../../source2/矩形-22-副本-5.png')}
                    style={{width:15,height:25}}
                />
              </TouchableHighlight>
                <Text style={{fontSize:32}}>{this.props.name}</Text>
            </View>

           <ListView
                dataSource={this.state.dataSource}
                renderRow={this._render.bind(this)}
                enableEmptySections={true}
                automaticallyAdjustContentInsets={false}
            />
            <View style={Styles.foot}>
              
                <TouchableHighlight onPress={this.newShow.bind(this)}>
                  <View style={Styles.zonghe}>
                    <Icon
                      name='th-list'
                      color="white"
                      size={14}
                    />
                    <Text style={{color:'white',fontSize:15,marginLeft:5}}>综合</Text>
                  </View>

                </TouchableHighlight>
                  
             
                
                
                <TouchableHighlight>
                <View style={Styles.zonghe}>
                  <Icon
                      name='cogs'
                      color="white"
                      size={14}
                  />
                  <Text style={{color:'white',fontSize:15,marginLeft:5}}>排序</Text>
                </View>
              </TouchableHighlight>
          </View>

          <Animated.View style={[Styles.mask,{transform:[{translateY:this.state.offsetY}]}]}>
                <View style={Styles.mengbaninner}>
                  <View style={Styles.mengbaninnerchoise}>
                      <View style={Styles.choicebtn}><Text style={Styles.choicebtntext}>取消</Text></View>
                      <View style={Styles.choicebtn}><Text style={Styles.choicebtntextmid}>清空重置</Text></View>
                      <View style={Styles.choicebtn}><Text style={Styles.choicebtntext}>确定</Text></View>
                  </View>
                  <View>
                      <ScrollableTabView style={{width:width,borderBottomColor:'red'}}>
                          <Text>1223</Text>
                      </ScrollableTabView>



                  </View>
                  
                </View>
          </Animated.View>

        </View>
    )
  };

  newShow(){
    Animated.timing(this.state.offsetY,{
          toValue:0,
          duration:300,
          easing:Easing.linear

    }).start()
  }
}

const Styles= StyleSheet.create({
  loadding: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title:{
      height:83,
      borderBottomWidth:1,
      borderBottomColor:'rgb(202,202,202)',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      position:'relative'
  },
  shiproute:{
      height:95,
      flexDirection:'row',
      paddingTop:10,
      paddingLeft:10,
      borderBottomWidth:1,
      borderBottomColor:'rgb(202,202,202)'
  },
  listwrap:{
    width:270,
    position:'relative',
    marginLeft:10
  },
  message:{
    flexDirection:'row',
    marginTop:5
  },
  messagelist:{
    flexDirection:'row',
    marginRight:37
  },
  fontcolor:{
    color:'rgb(143,142,143)',
    fontSize:13,
    marginLeft:10
  },
  paychoise:{
    height:17,
    width:270,
    position:'relative',
    marginTop:5
   
  },
  text:{
   width:75,
   height:15,
   fontSize:12,
   borderWidth:1,
   borderColor:'rgb(80,124,263)',
   borderRadius:7,
   textAlign:'center',
    paddingTop:1.5,
    left:5,
   position:'absolute'
  },
  foot:{
    width:width,
    height:45,
    backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  zonghe:{
    width:0.5*width,
    height:26,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:2,
    borderRightColor:'white'
  },
  mask:{
    position:"absolute",
        top:0,
        width:width,
        height:height,
        backgroundColor:"rgba(0,0,0,0.4)"
  },
  mengbaninner:{
    width:width,
    height:300,
    backgroundColor:'white',
    position:'absolute',
    bottom:0
  },
  mengbaninnerchoise:{
    height:50,
    backgroundColor:'#314150',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingTop:10
  },
  choicebtntext:{
    width:100,
    height:35,
    lineHeight:35,
    color:'white',
    textAlign:'center',
   
  },
  choicebtntextmid:{
    width:100,
    height:35,
    lineHeight:35,
    color:'white',
    textAlign:'center',
    backgroundColor:'#83878e',
  }
});

module.exports=Index;
















