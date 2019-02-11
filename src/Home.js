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
    color: "blue",
    number: "1 2 3 4   1 2 3 4   1 2 3 4",
    type: "mastercard"
  },
  {
    title: "Kotak",
    color: "red",
    number: "1 2 3 4   1 2 3 4   1 2 3 4",
    type: "visa"
  },
  {
    title: "Paytm",
    color: "lightgray",
    number: "1 2 3 4   1 2 3 4   1 2 3 4",
    type: "rupay"
  }
];
const SLIDER_1_FIRST_ITEM = 0;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <CardEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#262838" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.heading}>Wallet</Text>
        </View>
        <View style={styles.body}>
          <TotalBalance />
          <Carousel
            data={ENTRIES}
            renderItem={this._renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={false}
            autoplay={false}
            onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
          />
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
    backgroundColor: "#262838"
  },
  body: {
    flex: 14,
    alignItems: "stretch"
  },
  heading: {
    color: "white",
    fontSize: 24
  }
});
