import React from 'react';
import {
  Text, Image, StyleSheet, TouchableWithoutFeedback,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient/index';
import PropTypes from 'prop-types';
import { Screen } from '../common/Constants';

export default class CoustomActionBar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFirstPressing: false,
      isSecondPressing: false,
    };
  }

  onPresse = () => {
    const { onPress } = this.props;
    console.log(onPress);
    onPress();
  };

  render() {
    const { isFirstPressing, isSecondPressing } = this.state;
    const { title } = this.props;
    let { isVisiBackButton } = this.props;
    if (isVisiBackButton === undefined) {
      isVisiBackButton = true;
    }
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#fd7159', '#f13e55']}
        style={styles.linearGradient}
      >
        {
          isVisiBackButton
            ? (
              <TouchableWithoutFeedback
                onPressIn={() => this.setState({ isFirstPressing: true })}
                onPressOut={() => this.setState({ isFirstPressing: false })}
                onPress={this.onPresse}
              >
                <Image
                  source={isFirstPressing ? require('../../res/image/topbar_back_pressed.png') : require('../../res/image/topbar_back_normal.png')}
                  style={styles.firstImage}
                />

              </TouchableWithoutFeedback>
            )
            : <View style={{ width: 40 }} />

        }
        <Text ellipsizeMode="tail" style={styles.textStyle} numberOfLines={1}>
          {title}
        </Text>

        <TouchableWithoutFeedback
          onPressIn={() => this.setState({ isSecondPressing: true })}
          onPressOut={() => this.setState({ isSecondPressing: false })}
        >
          <Image
            source={isSecondPressing ? require('../../res/image/topbar_search_pressed.png') : require('../../res/image/topbar_search_normal.png')}
            style={styles.secondImage}
          />
        </TouchableWithoutFeedback>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Screen.WIDTH,
    height: 65
  },

  firstImage: {
    marginTop: 20,
    marginLeft: 15,
  },

  textStyle: {
    flex: 1,
    fontSize: 18,
    marginTop: 18,
    color: 'white',
    textAlign: 'center'
  },

  secondImage: {
    marginTop: 20,
    marginRight: 15,
  }

});
