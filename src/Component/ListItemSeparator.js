/**
 * Create by huangYaNan on 2019/3/13
 */

import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Screen } from '../common/Constants';

export default class ListItemSeparator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.lineStyle} />
    );
  }
}

const styles = StyleSheet.create({
  lineStyle: {
    width: Screen.WIDTH,
    height: 0.5,
    backgroundColor: '#dadada',
    marginLeft: 16
  }
});
