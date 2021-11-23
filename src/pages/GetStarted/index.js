import { Color } from "chalk";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ILGetStarted, ILLogo } from "../../assets/illustration";
import { Button } from "../../components";

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan Apoteker jadi lebih mudah & Flexsibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={{ height: 16  }} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: "space-between",
    backgroundColor: "white",
    flex: 1
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginTop: 91,
    color: "white"
  }
});
