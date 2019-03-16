
import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { Screen } from './src/common/Constants';

type Props = {};
export default class Test extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      defWebViewHeight: 0,
      thread: {
        contentText: 'aaa'
      },
    };
  }

  render() {
    return (
      <Text>test</Text>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 83.5,
    flex: 1
  },
  lineStyle: {
    width: Screen.WIDTH,
    height: 0.5,
    backgroundColor: '#dadada',
    marginLeft: 16
  },
  subscribeStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
});
