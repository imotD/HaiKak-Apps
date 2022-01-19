import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILCatUmum } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <ILCatUmum style={styles.ilustration} />
      <View>
        <Text style={styles.label}>Saya butuh</Text>
        <Text style={styles.category}>dokter umum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: 100,
    height: 130,
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    marginRight: 10,
    alignSelf: "flex-start"
  },
  ilustration: {
    marginBottom: 28
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300]
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary
  }
});
