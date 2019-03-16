/**
 * Create by huangYaNan on 2019/3/15
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default class EmptyData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { heightPro } = this.props;
    return (
      <View style={{ height: heightPro, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>没有数据</Text>
      </View>
    );
  }
}
