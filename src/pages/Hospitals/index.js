import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ILHospital } from "../../assets";
import { ListHospital } from "../../components";
import { colors, fonts } from "../../utils";

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground style={styles.background} source={ILHospital}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: "center",
    marginTop: 6
  },
  background: {
    height: 240,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: "center"
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    flex: 1,
    paddingTop: 14
  }
});
