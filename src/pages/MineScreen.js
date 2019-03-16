import React from 'react';
import {
  Text,
  View
} from 'react-native';

export default class MineScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> 我的页面 </Text>
      </View>
    );
  }
}
