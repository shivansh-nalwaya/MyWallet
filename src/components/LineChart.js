import React from "react";
import { LineChart, XAxis, YAxis, Grid } from "react-native-svg-charts";
import { View } from "react-native";

export default class LineChartView extends React.Component {
  render() {
    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 20, bottom: 20 };
    const xAxisHeight = -40;

    return (
      <View style={{ height: 200, padding: 20, flexDirection: "row" }}>
        <YAxis
          data={this.props.data || []}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          yAccessor={({ item }) => item.value}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ height: 200 }}
            data={this.props.data || []}
            svg={{ stroke: "rgb(255, 63, 47)" }}
            contentInset={{ top: 20, bottom: 20 }}
            yAccessor={({ item }) => item.value}
          >
            <Grid
              svg={{
                stroke: "rgb(45, 45, 45)"
              }}
            />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={this.props.data || []}
            formatLabel={(_, index) => this.props.data[index].label}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
      </View>
    );
  }
}
