import React, { Component } from "react";

import { Text, StyleSheet, View, Dimensions } from "react-native";

//import styleSheet
import styles from '../src/styleSheet';

const {width, height } = Dimensions.get('screen');

export default class List extends Component {
  static navigationOptions = {
    header: (
      <View style={[ styles.row, styles.header, styles.color]}>
        <View>
          <Text>Search for</Text>
          <Text>Destination</Text>
        </View>
        <View>
          <Text>Avatar</Text>
        </View>
      </View>
    )
  };

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Text>Destinations</Text>
      </View>
    );
  };
  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Text>Recommended</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.flex, styles.articles]}>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </View>
    );
  }
}
