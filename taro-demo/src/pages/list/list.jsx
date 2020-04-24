import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text} from '@tarojs/components';
import {connect} from '@tarojs/redux';

import {add, minus, asyncAdd} from '../../actions/counter';
// import SplitPane from "./component/SplitPane"
import './list.scss';


@connect (
  ({counter}) => ({
    counter,
  }),
  dispatch => ({
    add () {
      dispatch (add ());
    },
    dec () {
      dispatch (minus ());
    },
    asyncAdd () {
      dispatch (asyncAdd ());
    },
  })
)
class Index extends Component {
  
  componentWillReceiveProps (nextProps) {
    console.log (this.props, nextProps);
  }

  componentDidShow () {}

  componentDidHide () {}
  config = {
    navigationBarTitleText: 'List',
  };
  render () {
    return (
      <View className='index'>
          {/* <SplitPane
            left={
        <Text>Left</Text>
      }
            right={
        <Text>Right</Text>
      }
          /> */}
        <Button className='add_btn' onClick={()=>{Taro.navigateTo({url: '/pages/list/list'})}}>跳转list</Button>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    );
  }
}

export default Index;
