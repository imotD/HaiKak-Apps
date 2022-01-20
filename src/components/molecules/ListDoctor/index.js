import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DummyDoctor2 } from "../../../assets";
import { colors } from "../../../utils";

export default function ListDoctor() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={DummyDoctor2} />
      <View>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.desc}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    alignItems: "center"
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary
  }
});
