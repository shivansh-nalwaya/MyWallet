import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export default class RecentTransactions extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Recent Transactions</Text>
        <View style={styles.item}>
          <View>
            <Text style={styles.entry}>Paytm - Chai</Text>
            <Text style={styles.date}>1st Jan, 2018</Text>
          </View>
          <Text style={styles.minusEntry}> - 15 ₹</Text>
        </View>
        <View style={styles.item}>
          <View>
            <Text style={styles.entry}>SBI - Salary</Text>
            <Text style={styles.date}>1st Jan, 2018</Text>
          </View>
          <Text style={styles.addEntry}> + 10,000 ₹</Text>
        </View>
        <View style={styles.item}>
          <View>
            <Text style={styles.entry}>
              SBI <Icon name="arrow-right" size={10} /> Kotak
            </Text>
            <Text style={styles.date}>1st Jan, 2018</Text>
          </View>
          <Text style={styles.transferEntry}>10,000 ₹</Text>
        </View>
      </ScrollView>
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10
  },
  entry: {
    color: "white",
    fontSize: 18
  },
  date: {
    color: "white",
    fontSize: 14
  },
  addEntry: {
    color: "green",
    fontSize: 20
  },
  minusEntry: {
    color: "red",
    fontSize: 20
  },
  transferEntry: {
    color: "lightblue",
    fontSize: 20
  }
});
