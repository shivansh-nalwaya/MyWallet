import React from "react";
import { Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";

export default class PieChartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: "Rent",
        value: 55
      },
      labelWidth: 0
    };
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ["Rent", "Travel", "Grocery", "Food", "Others"];
    const values = [55, 45, 35, 25, 15];
    const colors = ["#e02200", "#ff4625", "#ff8069", "#ffab9c", "#ffd6cf"];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: {
          outerRadius: 70 + values[index] + "%",
          padAngle: label === key ? 0.1 : 0
        },
        onPress: () =>
          this.setState({ selectedSlice: { label: key, value: values[index] } })
      };
    });
    const deviceWidth = Dimensions.get("window").width;

    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <PieChart
          style={{ height: 200 }}
          outerRadius={"80%"}
          innerRadius={"45%"}
          data={data}
        />
        <Text
          onLayout={({
            nativeEvent: {
              layout: { width }
            }
          }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            color: "white",
            position: "absolute",
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: "center"
          }}
        >
          {`${label} \n ${value}%`}
        </Text>
      </View>
    );
  }
}
