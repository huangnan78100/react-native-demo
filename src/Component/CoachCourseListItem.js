/**
 * Create by huangYaNan on 2019/3/12
 */

import React from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';
import { Urls } from '../common/Constants';

export default class CoachCourseListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPress = (id) => {
    const { onPress } = this.props;
    // console.log(onPress);
    onPress(id);
  };

  render() {
    const { itemData } = this.props;
    const time = `${itemData.liveBeginTime}`;
    let status = '什么值';
    if (itemData.status === 3) {
      status = '已结束';
    }
    return (
      <TouchableHighlight underlayColor="#f7f5f5" onPress={() => this._onPress(itemData.id)}>
        <View style={styles.itemStyle}>
          <Image source={{ uri: `${Urls.IMAGE_NET}${itemData.mobileLogo}` }} style={{ width: 72, height: 48 }} />
          <View style={{ flex: 1, marginLeft: 16, padding: 0 }}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={{ flex: 1 }}>{itemData.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ flex: 1 }}>{time}</Text>
              <Text>{status}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 84,
  },
});
