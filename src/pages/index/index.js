import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button} from '@tarojs/components'
import Head from '../../components/Head/'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }


  render () {
    return (
      <View>
        <Head />
      </View>
    )
  }
}

