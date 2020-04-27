import Taro from '@tarojs/taro';
import {View} from '@tarojs/components';

export default function SplitPane(props) {
    return (
      <View className='SplitPane'>
        <View className='SplitPane-left'>
          {props.renderLeft}
        </View>
        <View className='SplitPane-right'>
          {props.renderRight}
        </View>
      </View>
    );
}