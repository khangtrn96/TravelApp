import React, { Component } from "react";

import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: 36,
    paddingTop: 48,
    paddingBottom: 24
  },
  articles: {
    paddingHorizontal: 36
  },
  color: {
    backgroundColor: 'red'
  }
});

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

  renderDestination = () => {
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
        {this.renderDestination()}
        {this.renderRecommended()}
      </View>
    );
  }
}
