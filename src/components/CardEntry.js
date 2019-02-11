import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { itemWidth } from "../styles/SliderEntry.style";

export default class CardEntry extends Component {
  render() {
    const { title, color, number, type } = this.props.data;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          alert("You've clicked");
        }}
      >
        <View style={{ ...styles.container, backgroundColor: color }}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Image
              style={
                type == "mastercard"
                  ? { width: 74, height: 57 }
                  : { width: 68, height: 23 }
              }
              source={
                type == "mastercard"
                  ? {
                      uri:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                    }
                  : {
                      uri:
                        "https://www.schoolofpublicpolicy.visa.com/media/1001/visalogo_white.png"
                    }
              }
            />
          </View>
          <Text style={styles.number}>{number}</Text>
          <View style={styles.footer}>
            <Text style={{ color: "white" }}>SHIVANSH NALWAYA</Text>
            <Text style={{ color: "white" }}>05/22</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: 180,
    borderRadius: 10,
    paddingHorizontal: 20
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
