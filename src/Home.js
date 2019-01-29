import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#262838" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.heading}>Dashboard</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.heading}>Total Balance</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#080A10"
  },
  header: {
    flex: 1,
    backgroundColor: "#262838",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    fontFamily: "lucida grande"
  },
  body: { flex: 6 },
  heading: {
    color: "white",
    fontSize: 30
  }
});
