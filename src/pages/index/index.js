import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button} from '@tarojs/components'
import Child from './Child'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super(props)
    this.state = { name:"lily" }
  }

  changeName() {
    this.setState({
      name:'lucy'
    })
  }
  render () {
    return (
      <View>
        <Button onClick={this.changeName.bind(this)}>改变名字</Button>
        <Text>{this.state.name}</Text>
        <Child />
      </View>
    )
  }
}

