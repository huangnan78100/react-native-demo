import React from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Home页面 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    margin: 10,
    backgroundColor: 'transparent',
  },
});
