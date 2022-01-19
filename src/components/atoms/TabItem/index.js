import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  IconChat,
  IconChatActive,
  IconFace,
  IconFaceActive,
  IconMap,
  IconMapActive
} from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function TabItem({ title, active, onPress, onLongPress }) {
  const Icon = () => {
    if (title === "Doctor") {
      return active ? <IconFaceActive /> : <IconFace />;
    }
    if (title == "Messages") {
      return active ? <IconChatActive /> : <IconChat />;
    }
    if (title === "Hospitals") {
      return active ? <IconMapActive /> : <IconMap />;
    }
    return <IconFace />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4
  })
});
