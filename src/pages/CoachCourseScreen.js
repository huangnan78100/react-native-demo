import React from 'react';
import {
} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import CoustomActionBar from '../Component/CoustomActionBar';
import CoachCourseList from '../Component/CoachCourseList';

export default class CoachCourseScreen extends React.Component {
  static navigationOptions = () => ({ header: <CoustomActionBar title="面授课程" isVisiBackButton={false} /> });

  render() {
    return (
      <AppContainer />
    );
  }
}

const materialTopTabNavigator = createMaterialTopTabNavigator(
  {
    All: {
      screen: CoachCourseList,
      navigationOptions: {
        tabBarLabel: '全部',
      },
      params: {
        index: 0,
      }
    },
    UnStart: {
      screen: CoachCourseList,
      navigationOptions: {
        tabBarLabel: '未开始',
      },
      params: {
        index: 1,
      }
    },
    Start: {
      screen: CoachCourseList,
      navigationOptions: {
        tabBarLabel: '开始',
      },
      params: {
        index: 2,
      }
    },
    End: {
      screen: CoachCourseList,
      navigationOptions: {
        tabBarLabel: '已结束',
      },
      params: {
        index: 3,
      }
    },
  },
  {
    initialRouteName: 'All',
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'black',
      scrollEnabled: false,
      optimizationsEnabled: true,
      showLabel: true,
      pressColor: '#f7f5f5',
      pressOpacity: 0.2,
      lazy: false,
      style: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0,
        shadowRadius: 0,
        borderBottomColor: '#dadada',
        borderBottomWidth: 0.5
      },
      indicatorStyle: {
        backgroundColor: 'red',
      },
    }
  }

);

const AppContainer = createAppContainer(materialTopTabNavigator);
