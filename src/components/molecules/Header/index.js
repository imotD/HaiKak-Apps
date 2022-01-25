import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../../../utils";
import { Button, Gap } from "../../atoms";

export default function Header({ title, onPress, type }) {
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === "dark" ? "back-light" : "back-dark"}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>
        {title}
      </Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: type === "dark" ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === "dark" ? 10 : 0,
    borderBottomRightRadius: type === "dark" ? 10 : 0
  }),
  title: type => ({
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: type === "dark" ? colors.white : colors.text.primary,
    flex: 1
  })
});
