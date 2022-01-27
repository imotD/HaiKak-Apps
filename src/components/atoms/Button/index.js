import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors, fonts } from "../../../utils";
import ButtonIconSend from "./ButtonIconSend";
import IconOnly from "./IconOnly";

export default function Button({ type, title, icon, onPress, disable }) {
  if (type === "btn-icon-send") {
    return <ButtonIconSend disable={disable} />;
  }
  if (type === "icon-only") {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === "secondary"
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: "center",
    color:
      type === "secondary"
        ? colors.button.secondary.text
        : colors.button.primary.text
  })
});
