/**
 * Create by huangYaNan on 2019/3/12
 */

import React from 'react';
import {
  FlatList,
  RefreshControl,
} from 'react-native';
import CoachCourseListItem from './CoachCourseListItem';
import ListItemSeparator from './ListItemSeparator';
import NavigationService from '../service/NavigationService';
import { Urls } from '../common/Constants';
import EmptyData from './EmptyData';

export default class CoachCourseList extends React.Component {
  constructor(props) {
    super(props);
    this.mPage = 1;
    const { navigation } = props;
    this.mIndex = navigation.getParam('index', 0);
    this.state = {
      data: [],
      isRefreshing: false,
      totalPageSize: 1,
      flatlistHeight: 10
    };
  }

  componentDidMount(): void {
    this._onRefreshData();
    // const { navigation } = this.props;
    // const { key } = navigation.state;
    // if (key === 'All') {
    //   status = 0;
    // } else if (key === 'UnStart') {
    //   status = 1;
    // } else if (key === 'Start') {
    //   status = 2;
    // } else if (key === 'End') {
    //   status = 3;
    // }
    // console.log(`status: ${status}`);
  }

  _ferchData = (page) => {
    this.mPage = page;
    const { isRefreshing } = this.state;
    if (page === 1 && !isRefreshing) {
      this.setState({ isRefreshing: true });
    }
    const url = `${Urls.HOST}${Urls.COACH_COUSER_LIST}`;

    const requestSetting = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/x-www-form-urlencoded'
      },
      body: `queryCourse.status=${this.mIndex}&page.currentPage=${page}&page.pageSize=12`,
    };

    fetch(url, requestSetting)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState((preState) => {
          return {
            data: page === 1 ? responseJson.entity.courseList
              : preState.data.concat(responseJson.entity.courseList),
            isRefreshing: false,
            totalPageSize: responseJson.entity.page.totalPageSize
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _onRefreshData = () => {
    this._ferchData(1);
  };

  _onLoadMoreData = () => {
    const { totalPageSize } = this.state;
    if (totalPageSize > this.mPage) {
      this._ferchData((this.mPage + 1));
    }
  };

  _onClickItem = (id) => {
    NavigationService.navigate('CoachCourseDetail', { courseId: id });
  };

  render() {
    const { data, isRefreshing, flatlistHeight } = this.state;
    return (
      <FlatList
        renderItem={({ item }) => (
          <CoachCourseListItem
            itemData={item}
            onPress={this._onClickItem}
          />)}
        data={data}
        ItemSeparatorComponent={ListItemSeparator}
        onEndReached={this._onLoadMoreData}
        onEndReachedThreshold={0.5}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<EmptyData heightPro={flatlistHeight} />}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;
          if (flatlistHeight < height) {
            this.setState({ flatlistHeight: height });
          }
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={(
          <RefreshControl
            onRefresh={this._onRefreshData}
            tintColor="red"
            colors={['red', 'green']}
            refreshing={isRefreshing}
          />)
        }
      />
    );
  }
}
