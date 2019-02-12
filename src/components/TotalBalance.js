import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TotalBalance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>Total Balance</Text>
          <Text style={styles.balance}>
            74,000
            <Text style={styles.currency}> ₹</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 30
  },
  box: {
    flexDirection: "column",
    alignItems: "center"
  },
  heading: {
    color: "#ababab",
    fontSize: 16
  },
  balance: {
    color: "white",
    fontSize: 30
  },
  currency: {
    color: "#ababab",
    fontSize: 30
  }
});
