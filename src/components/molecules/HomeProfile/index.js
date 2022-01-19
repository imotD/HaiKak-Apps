import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DummyUser } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={DummyUser} />
      <View>
        <Text style={styles.name}>Shyana Melinda</Text>
        <Text style={styles.job}>Product Designer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary
  }
});
