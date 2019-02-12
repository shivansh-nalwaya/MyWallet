import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import TotalBalance from "./components/TotalBalance";
import RecentTransactions from "./components/RecentTransactions";
import Carousel from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry.style";
import CardEntry from "./components/CardEntry";

const ENTRIES = [
  {
    title: "SBI",
    theme: "#103ABB",
    theme2: "#103A65",
    number: "1 2 3 4   1 2 3 4   1 2 3 4",
    type: "mastercard"
  },
  {
    title: "Kotak",
    theme: "#FE0000",
    theme2: "#9A0000",
    number: "1 2 3 4   1 2 3 4   1 2 3 4",
    type: "visa"
  },
  {
    title: "Paytm",
    theme: "#00B3D3",
    theme2: "#00B3F5",
    number: "1 2 3 4   1 2 3 4   1 2 3 4",
    type: "rupay"
  }
];

export default class Home extends Component {
  _renderCard({ item, index }) {
    return <CardEntry data={item} key={index} />;
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#262838" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.heading}>Wallet</Text>
        </View>
        <View style={styles.body}>
          <View style={{ flex: 2 }}>
            <TotalBalance />
          </View>
          <View style={{ flex: 3 }}>
            <Carousel
              data={ENTRIES}
              renderItem={this._renderCard}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={false}
              autoplay={false}
            />
          </View>
          <View style={{ flex: 4 }}>
            <RecentTransactions />
          </View>
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
    backgroundColor: "#262838"
  },
  body: {
    flex: 10,
    alignItems: "stretch"
  },
  heading: {
    color: "white",
    fontSize: 20
  }
});
