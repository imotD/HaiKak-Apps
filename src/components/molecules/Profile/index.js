import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DummyUser } from "../../../assets";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Shayna Melinda</Text>
      <Text style={styles.job}>Product Designer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: { width: 110, height: 110, borderRadius: 110 / 2 },
  border: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.border
  },
  name: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 16
  },
  job: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2
  }
});
