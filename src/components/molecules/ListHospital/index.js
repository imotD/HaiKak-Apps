import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DummyHospital1 } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function ListHospital() {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={DummyHospital1} />
      <View>
        <Text style={styles.title}>Rumah Sakit </Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  picture: {
    height: 60,
    width: 80,
    borderRadius: 11,
    marginRight: 16
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary
  }
});
