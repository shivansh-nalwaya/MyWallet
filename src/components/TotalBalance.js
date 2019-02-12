import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TotalBalance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Total Balance</Text>
        <Text style={styles.balance}>
          20,000
          <Text style={styles.currency}> ₹</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 20,
    alignItems: "center"
  },
  heading: {
    color: "#ababab",
    fontSize: 20
  },
  balance: {
    color: "white",
    fontSize: 50
  },
  currency: {
    color: "#ababab",
    fontSize: 50
  }
});
