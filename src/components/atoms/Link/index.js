import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Link({ title, size, align }) {
  return (
    <View>
      <Text style={styles.text(size, align)}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: "#7d8798",
    fontFamily: "Nuninto-Regular",
    textAlign: align,
    textDecorationLine: "underline"
  })
});
