import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILLogo } from "../../assets/illustration";

export default function Splash() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>HaiKak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#112340",
    marginTop: 20
  }
});
