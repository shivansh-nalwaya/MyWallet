import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const AccountItem = props => {
  return (
    <View style={styles.listItem}>
      <Image
        style={{ width: 50, height: 50, marginVertical: 15 }}
        source={{
          uri: props.imageUrl
        }}
      />
      <Text style={styles.accountName}>{props.name}</Text>
      <Text style={styles.accountBalance}>{props.balance}</Text>
    </View>
  );
};

export default class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <AccountItem
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2000px-SBI-logo.svg.png"
            name="SBI"
            balance="10,000 ₹"
            currentCard
          />
          <AccountItem
            imageUrl="http://bankifsccodehub.com/logos/Kotak-Mahindra-Bank.png"
            name="Kotak"
            balance="10,000 ₹"
          />
          <AccountItem
            imageUrl="https://i0.wp.com/www.noticebard.com/wp-content/uploads/2018/02/paytm-customer-care-internship-Delhi.png"
            name="Paytm"
            balance="10,000 ₹"
          />
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
    backgroundColor: "#262838",
    height: 200,
    width: 300,
    borderRadius: 10
  },
  accountName: {
    color: "tomato",
    fontSize: 18
  },
  accountBalance: {
    color: "white",
    fontSize: 24
  }
});
