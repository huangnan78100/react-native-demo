/**
 * Create by huangYaNan on 2019/3/14
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl
} from 'react-native';
import ListItemSeparator from './ListItemSeparator';
import { Urls } from '../common/Constants';
import EmptyData from './EmptyData';

export default class CoachComment extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.mCourseId = navigation.getParam('courseId');
    this.state = {
      data: [],
      isRefreshing: false,
      totalPageSize: 1,
      flatlistHeight: 10
    };
  }

  componentDidMount(): void {
    this._onRefreshData();
  }

  _fetchData = (page, courseId) => {
    this.mPage = page;
    const { isRefreshing } = this.state;
    if (page === 1 && !isRefreshing) {
      this.setState({ isRefreshing: true });
    }
    const url = `${Urls.HOST}${Urls.COACH_COURSE_COMMENT}`;

    const requestSetting = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/x-www-form-urlencoded'
      },
      body: `courseId=${courseId}&page.currentPage=${page}&userId=-1`,
    };

    fetch(url, requestSetting)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState((preState) => {
          return {
            data: page === 1 ? responseJson.entity.assessList
              : preState.data.concat(responseJson.entity.assessList),
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
    this._fetchData(1, this.mCourseId);
  };

  onLoadMoreData = () => {
    const { totalPageSize } = this.state;
    if (totalPageSize > this.mPage) {
      this._fetchData(this.mPage + 1, this.mCourseId);
    }
  };

  renderItem = ({ item }) => {
    const json = JSON.stringify(item);
    console.log(json);
    return (
      <View>
        <View style={{ flexDirection: 'row', paddingVertical: 16 }}>
          <Image source={{ uri: `${Urls.IMAGE_NET}${item.avatar}` }} style={{ width: 30, height: 30, borderRadius: 15, marginLeft: 16 }} />
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 13 }}>{item.loginAccount}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 10, color: '#bdbdbd' }}>{item.createTime}</Text>
            <Text style={{ fontSize: 13 }}>{item.content}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingEnd: 16 }}>
            <Image source={require('../../res/image/btn_praise_normal.png')} />
            <Text>0</Text>
          </View>
        </View>
        <ListItemSeparator />
      </View>
    );
  };

  render() {
    const { data, isRefreshing, flatlistHeight } = this.state;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.onLoadMoreData}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyData heightPro={flatlistHeight} />}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;
          if (flatlistHeight < height) {
            this.setState({ flatlistHeight: height });
          }
        }}
        refreshControl={(
          <RefreshControl
            onRefresh={this._onRefreshData}
            refreshing={isRefreshing}
            tintColor="red"
            colors={['red', 'green']}
          />
        )}
      />
    );
  }
}
