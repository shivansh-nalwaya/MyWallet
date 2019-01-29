import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class RecentTransactions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Recent Transactions</Text>
        <Text style={styles.entry}>
          SBI - <Text style={styles.minusEntry}> - ₹ 150</Text>
        </Text>
        <Text style={styles.entry}>
          SBI - <Text style={styles.addEntry}> + ₹ 15,000</Text>
        </Text>
        <Text style={styles.entry}>
          Paytm - <Text style={styles.addEntry}> + ₹ 15</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  heading: {
    color: "#ababab",
    fontSize: 20,
    paddingBottom: 10
  },
  entry: {
    color: "white",
    fontSize: 16,
    marginVertical: 10
  },
  addEntry: {
    color: "green"
  },
  minusEntry: {
    color: "red"
  }
});
