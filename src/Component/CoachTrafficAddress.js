/**
 * Create by huangYaNan on 2019/3/14
 */

import React from 'react';
import {
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class CoachTrafficAddress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const courseContextAddress = navigation.getParam('courseContextAddress', '');
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: courseContextAddress }}
        style={{ flex: 1 }}
      />
    );
  }
}
