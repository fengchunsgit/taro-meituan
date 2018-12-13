import Taro, { Component } from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components'
import Top from './top'
import Activity from './activity'
import './index.less'


class Head extends Component {
  constructor(){
    super(...arguments)
    this.state={
      store:{
        title:'重庆鸡公煲',
        notice:'来啦，老弟~',
        tags:['味道好','分量足','不错不错，味道好极了！']
      }
    }
  }

  render() {
    let {store} =this.state
    return (

      <View className='head'>
        <Top />
        <Image className='back' src={require('../../assets/img/back.jpg')}></Image>
        <View className='store'>
          <Image className='store_img' src={require('../../assets/img/store.jpg')} ></Image>
          <View className='store_text'>
            <Text className='title'>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {store.tags.map((item,index)=>{
                return <Text className='tags_text' key={index}>{item}</Text>
              })}
            </View>
          </View>
        </View>
        <Activity />
      </View>)
  }
}

export default Head;
