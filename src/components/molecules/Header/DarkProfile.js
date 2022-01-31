import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DummyDoctor7 } from "../../../assets";
import { colors, fonts } from "../../../utils";
import { Button } from "../../atoms";

export default function DarkProfile({ title, onPress, desc }) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.desc}>
          {desc}
        </Text>
      </View>
      <Image source={DummyDoctor7} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  content: {
    flex: 1
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.white,
    flex: 1
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.subTitle,
    textAlign: "center",
    marginTop: 6
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2
  }
});
