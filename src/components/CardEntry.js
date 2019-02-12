import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { itemWidth } from "../styles/SliderEntry.style";
import LinearGradient from "react-native-linear-gradient";

const CardHeader = props => {
  if (props.type == "mastercard") {
    dimensions = { width: 74, height: 57 };
    uri =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png";
  } else if (props.type == "visa") {
    dimensions = { width: 68, height: 23 };
    uri =
      "https://www.schoolofpublicpolicy.visa.com/media/1001/visalogo_white.png";
  } else {
    dimensions = { width: 81, height: 27 };
    uri = "https://image3.mouthshut.com/images/imagesp/925840065s.png";
  }
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
      <Image style={dimensions} source={{ uri }} />
    </View>
  );
};

export default class CardEntry extends Component {
  render() {
    const { theme, theme2, number } = this.props.data;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[theme, theme2]}
          style={{ ...styles.container, paddingHorizontal: 20 }}
        >
          <CardHeader {...this.props.data} />
          <Text style={styles.number}>{number}</Text>
          <View style={styles.footer}>
            <Text style={{ color: "white" }}>SHIVANSH NALWAYA</Text>
            <Text style={{ color: "white" }}>05/22</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: 180,
    borderRadius: 10
  },
  title: {
    flex: 5,
    alignSelf: "center",
    color: "white",
    fontSize: 30
  },
  number: {
    flex: 2,
    alignSelf: "flex-start",
    color: "white",
    fontSize: 24
  },
  header: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
