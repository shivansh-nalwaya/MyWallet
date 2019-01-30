import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default class AccountList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={styles.listItem}>
            <Image
              style={{ width: 50, height: 50, marginVertical: 15 }}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2000px-SBI-logo.svg.png"
              }}
            />
            <Text style={styles.accountName}>SBI</Text>
            <Text style={styles.accountBalance}>10,000 ₹</Text>
          </View>
          <View style={styles.listItem}>
            <Image
              style={{ width: 200, height: 50, marginVertical: 15 }}
              source={{
                uri: "http://bankifsccodehub.com/logos/Kotak-Mahindra-Bank.png"
              }}
            />
            <Text style={styles.accountName}>Kotak</Text>
            <Text style={styles.accountBalance}>10,000 ₹</Text>
          </View>
          <View style={styles.listItem}>
            <Image
              style={{ width: 200, height: 50, marginVertical: 15 }}
              source={{
                uri:
                  "https://i0.wp.com/www.noticebard.com/wp-content/uploads/2018/02/paytm-customer-care-internship-Delhi.png"
              }}
            />
            <Text style={styles.accountName}>Paytm</Text>
            <Text style={styles.accountBalance}>500 ₹</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10
  },
  listItem: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
    margin: 10,
    backgroundColor: "white",
    height: 150,
    width: 225,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "tomato"
  },
  accountName: {
    color: "tomato",
    fontSize: 18
  },
  accountBalance: {
    color: "black",
    fontSize: 24
  }
});
