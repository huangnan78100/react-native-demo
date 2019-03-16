/**
 * Create by huangYaNan on 2019/3/14
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { Urls } from '../common/Constants';

export default class CoachTeacherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item }) => {
    let position = '';
    switch (item.isStar) {
      case 0:
        position = '高级';
        break;
      case 1:
        position = '首席';
        break;
      case 2:
        position = '专家';
        break;
      case 3:
        position = '新秀';
        break;
      default:
        position = '';
    }

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 4 }}>
        <Image source={{ uri: `${Urls.IMAGE_NET}${item.picPath}` }} style={{ borderRadius: 20, marginLeft: 10, width: 40, height: 40 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, marginLeft: 10 }}>{position}</Text>
      </View>
    );
  };

  render() {
    const { teacherArray } = this.props;
    return (
      <View style={{ paddingBottom: 10 }}>
        <Text style={{ color: 'red', marginBottom: 6, marginLeft: 4 }}>讲师</Text>
        <FlatList
          renderItem={this.renderItem}
          data={teacherArray}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
