import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../../utils";

export default function Input({ label }) {
  return (
    <View>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: "Nuninto-Regular"
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10
  }
});
