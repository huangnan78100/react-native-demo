/**
 * Create by huangYaNan on 2019/3/14
 */

import React from 'react';
import {
  View,
  Text, ActivityIndicator, StyleSheet
} from 'react-native';
import { Screen } from '../common/Constants';

export default class LoadingWait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.balckgroundStyle}>
        <View style={styles.contnetStyle}>
          <ActivityIndicator size="large" color="red" style={{ paddingHorizontal: 16 }} />
          <Text>请稍等...</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  balckgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000066'
  },

  contnetStyle: {
    flexDirection: 'row',
    width: Screen.WIDTH - 80,
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 4
  }

});
