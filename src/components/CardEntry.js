import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class CardEntry extends Component {
  render() {
    const { title } = this.props.data;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          alert("You've clicked");
        }}
      >
        <View style={styles.container}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 160,
    backgroundColor: "white",
    borderRadius: 10
  }
});
