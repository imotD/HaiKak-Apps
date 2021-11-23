import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Button({ type, title }) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === "secondary" ? "white" : "#0bcada",
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: type === "secondary" ? "gray" : "white"
  })
});