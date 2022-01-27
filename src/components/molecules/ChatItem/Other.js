import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DummyDoctor8 } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function Other() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={DummyDoctor8} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}> 4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 20,
    paddingLeft: 16
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: "80%",
    borderRadius: 10,
    borderBottomLeftRadius: 0
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white
  }
});
