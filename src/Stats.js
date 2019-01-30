import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import LineChartView from "./components/LineChart";
import PieChartView from "./components/PieChart";
import { data } from "./store/Data";

export default class Stats extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#262838" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.heading}>Stats</Text>
        </View>
        <View style={styles.body}>
          <LineChartView data={data} />
          <PieChartView data={data} />
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
