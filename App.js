/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {
  Image
} from 'react-native';
import {
  createBottomTabNavigator, createStackNavigator, createAppContainer
} from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import CoachCourseScreen from './src/pages/CoachCourseScreen';
import MineScreen from './src/pages/MineScreen';
import CoachCourseDetailScreen from './src/pages/CoachCourseScreenDetail';
import NavigationService from './src/service/NavigationService';

type Props = {};
export default class App extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      />);
  }
}

const HomeScreenStack = createStackNavigator(
  {

    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
  },
);

const MineScreenStack = createStackNavigator(
  {

    Mine: {
      screen: MineScreen,
      navigationOptions: {
        header: null,
      }
    },
  },
);

const CoachCourseScreenStack = createStackNavigator(
  {

    CoachCourse: {
      screen: CoachCourseScreen,
    },

  },
);

const AppTabNaviagtor = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStack,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image source={require('./res/image/btn_tab_home_selected.png')} />;
          }
          return <Image source={require('./res/image/btn_tab_home_normal.png')} />;
        }
      }

    },
    CoachCourseStack: {
      screen: CoachCourseScreenStack,
      navigationOptions: {
        tabBarLabel: '面授课程',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image source={require('./res/image/btn_tab_elective_selected.png')} />;
          }
          return <Image source={require('./res/image/btn_tab_elective_normal.png')} />;
        }
      }

    },
    Mine: {
      screen: MineScreenStack,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image source={require('./res/image/btn_tab_mine_selected.png')} />;
          }
          return <Image source={require('./res/image/btn_tab_mine_normal.png')} />;
        }
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#ec4f60',
      inactiveTintColor: '#9B9B9B',
    },
    initialRouteName: 'Home',
    backBehavior: 'none',
  }
);

const CoachCourseStackNavigation = createStackNavigator(
  {
    mainPage: {
      screen: AppTabNaviagtor,
      navigationOptions: {
        header: null
      }
    },
    CoachCourseDetail: CoachCourseDetailScreen
  },
  {
    initialRouteName: 'mainPage'
  }
);

const AppContainer = createAppContainer(CoachCourseStackNavigation);
