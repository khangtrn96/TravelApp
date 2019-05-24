import React, { Component } from "react";

import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

//import styleSheet
import styles from '../src/styleSheet';

const {width, height } = Dimensions.get('screen');

export default class List extends Component {
  static navigationOptions = {
    header: (
      <View style={[ styles.row, styles.header, styles.flex]}>
        <View>
          <Text style={{color:'#d9dde2'}}>Search for</Text>
          <Text style={{fontSize:24}} >Destination</Text>
        </View>
        <View>
          <Image style={styles.avatar} source={{uri:'https://randomuser.me/api/portraits/women/65.jpg'}}/>
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
