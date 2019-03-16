/**
 * Create by huangYaNan on 2019/3/14
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { WebView } from 'react-native-webview';
import CoachTeacherList from './CoachTeacherList';
import { Screen } from '../common/Constants';

export default class CoachInreoduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const course = navigation.getParam('course');
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 80 }}>
          <View style={{ flex: 7, marginLeft: 16 }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 15 }}>
              {course.name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#bdbdbd', fontSize: 13 }}>
              {course.liveBeginTime}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#bdbdbd', fontSize: 13 }}>
              {course.location}
            </Text>
          </View>
          <Text style={{ flex: 3, color: 'red', textAlign: 'center' }}>
            剩余名额：{ course.facePlanCount - course.faceReserveCount }
          </Text>
        </View>
        <View style={{ backgroundColor: '#dadada88', height: 8 }} />
        <CoachTeacherList teacherArray={course.teacherList} />
        <View style={{ backgroundColor: '#dadada88', height: 8 }} />
        <Text style={{ color: 'red', marginLeft: 4 }}>课程介绍</Text>
        <WebView
          originWhitelist={['*']}
          source={{ html: course.context }}
          style={{ width: Screen.WIDTH, height: Screen.HEIGHT }}
        />
      </View>
    );
  }
}
