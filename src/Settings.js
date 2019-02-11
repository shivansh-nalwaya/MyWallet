import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry.style";
import CardEntry from "./components/CardEntry";
import styles from "./styles/index.style";

const ENTRIES = [
  {
    title: "SBI"
  },
  {
    title: "Kotak"
  },
  {
    title: "Paytm"
  },
  {
    title: "GPay"
  }
];

const SLIDER_1_FIRST_ITEM = 0;

export default class example extends Component {
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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.exampleContainer}>
            <Carousel
              ref={c => (this._slider1Ref = c)}
              data={ENTRIES}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={false}
              autoplay={false}
              onSnapToItem={index =>
                this.setState({ slider1ActiveSlide: index })
              }
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
