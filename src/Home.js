import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import TotalBalance from "./components/TotalBalance";
import AccountList from "./components/AccountList";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#262838" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.heading}>Dashboard</Text>
        </View>
        <View style={styles.body}>
          <TotalBalance />
          <AccountList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#080A10"
  },
  header: {
    flex: 1,
    backgroundColor: "#262838",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    fontFamily: "lucida grande"
  },
  body: {
    flex: 6,
    alignItems: "stretch"
  },
  heading: {
    color: "white",
    fontSize: 30
  }
});
