import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Button({ type, title, onPress }) {
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
    backgroundColor: type === "secondary" ? "white" : "#0bcada",
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: "Nunito-SemiBold",
    textAlign: "center",
    color: type === "secondary" ? "gray" : "white"
  })
});
