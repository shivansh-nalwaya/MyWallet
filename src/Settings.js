import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry.style";
import SliderEntry from "./components/SliderEntry";
import styles, { colors } from "./styles/index.style";
import { ENTRIES1 } from "./static/entries";

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <LinearGradient
            colors={[colors.background1, colors.background2]}
            startPoint={{ x: 1, y: 0 }}
            endPoint={{ x: 0, y: 1 }}
            style={styles.gradient}
          />
          <View style={styles.exampleContainer}>
            <Carousel
              ref={c => (this._slider1Ref = c)}
              data={ENTRIES1}
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
