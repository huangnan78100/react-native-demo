import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import CoustomActionBar from '../Component/CoustomActionBar';
import { Urls, Screen } from '../common/Constants';
import LoadingWait from '../Component/LoadingWait';
import CoachInreoduce from '../Component/CoachInreoduce';
import CoachTrafficAddress from '../Component/CoachTrafficAddress';
import CoachComment from '../Component/CoachComment';

let AppContainer = {};
export default class CoachCourseDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // const navigationJson = JSON.stringify(navigation);
    // console.log(`CoachCourseDetailScreen: ${navigationJson}`);
    const courseName = navigation.getParam('courseName', '面授课程详情');
    return ({
      header: <CoustomActionBar title={courseName} onPress={() => navigation.goBack()} />
    });
  };

  constructor(props) {
    super(props);
    const { navigation } = props;
    this.mCourseId = navigation.getParam('courseId', -1);
    this.state = {
      course: {},
      isLoadding: true
    };
  }

  componentDidMount(): void {
    this._fetchData(this.mCourseId);
  }

  _fetchData = (courseIdTemp) => {
    const url = `${Urls.HOST}${Urls.COACH_COUSER_DETAIL}${courseIdTemp}?userId=-1`;
    fetch(url)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          course: responseJson.entity.course,
          isLoadding: false,
        });
        const { navigation } = this.props;
        navigation.setParams({
          courseName: responseJson.entity.course.name,
        });
      })
      .catch(error => console.error(error));
  };

  _createTopTabNavigation = (courseData) => {
    const materialTopTabNavigator = createMaterialTopTabNavigator(
      {
        Inreoduce: {
          screen: CoachInreoduce,
          navigationOptions: {
            tabBarLabel: '介绍',
          },
          params: {
            course: courseData
          }
        },
        TrafficAddress: {
          screen: CoachTrafficAddress,
          navigationOptions: {
            tabBarLabel: '交通路线',
          },
          params: {
            courseContextAddress: courseData.extraContext
          }
        },
        Comment: {
          screen: CoachComment,
          navigationOptions: {
            tabBarLabel: '评论',
          },
          params: {
            courseId: courseData.id
          }
        },
      },
      {
        initialRouteName: 'Inreoduce',
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

    AppContainer = createAppContainer(materialTopTabNavigator);
  };

  render() {
    const { isLoadding, course } = this.state;
    if (isLoadding) {
      return <LoadingWait />;
    }
    this._createTopTabNavigation(course);
    return (
      <View style={{ flex: 1 }}>
        <Image source={{ uri: `${Urls.IMAGE_NET}${course.mobileLogo}` }} style={{ width: Screen.WIDTH, height: Screen.WIDTH / 2 }} />
        <AppContainer style={{ flex: 1 }} />
        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../res/image/btn_praise_normal.png')} />
            <Text>收藏</Text>
          </View>
          <View style={styles.subscribeStyle}>
            <Text style={{ color: 'white' }}>预约结束</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subscribeStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
});
