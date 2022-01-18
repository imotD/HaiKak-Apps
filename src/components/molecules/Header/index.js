import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";
import { Button, Gap } from "../../atoms";

export default function Header({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.title}>
        {title}
      </Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Nuninto-SemiBold",
    color: colors.text.primary,
    flex: 1
  }
});
