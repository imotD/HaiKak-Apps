import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DummyNews1 } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image style={styles.image} source={DummyNews1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: "90%"
  },
  titleWrapper: {
    flex: 1
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11
  }
});
