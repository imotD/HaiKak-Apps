import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DummyDoctor1, IconStar } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function RatedDoctor({ name, category }) {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.category}>
          {category}
        </Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16
  },
  profile: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
