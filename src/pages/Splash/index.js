import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILLogo } from "../../assets/illustration";
import { Fire } from "../../config";
import { colors, fonts } from "../../utils";

export default function Splash({ navigation }) {
  useEffect(
    () => {
      Fire.auth().onAuthStateChanged(user => {
        if (user) {
          navigation.replace("MainApp");
        } else {
          setTimeout(() => {
            navigation.replace("GetStarted");
          }, 3000);
        }
      });
    },
    [navigation]
  );

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
    justifyContent: "center",
    backgroundColor: colors.white
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 20
  }
});
