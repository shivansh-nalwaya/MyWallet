import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import TotalBalance from "./components/TotalBalance";
import AccountList from "./components/AccountList";
import RecentTransactions from "./components/RecentTransactions";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#262838" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.heading}>Wallet</Text>
        </View>
        <View style={styles.body}>
          <TotalBalance />
          <AccountList />
          <RecentTransactions />
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    fontFamily: "lucida grande"
  },
  body: {
    flex: 14,
    alignItems: "stretch"
  },
  heading: {
    color: "white",
    fontSize: 20
  }
});
