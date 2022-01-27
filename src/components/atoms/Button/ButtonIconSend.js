import React from "react";
import { StyleSheet, View } from "react-native";
import { IconSendGrey, IconSendWhite } from "../../../assets";
import { colors } from "../../../utils";

export default function ButtonIconSend({ disable }) {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendGrey />}
      {!disable && <IconSendWhite />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  })
});
