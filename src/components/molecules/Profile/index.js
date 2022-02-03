import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IconRemovePhoto } from "../../../assets";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";

export default function Profile({ photo, name, desc, isRemove }) {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image source={photo} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
      </View>
      {name &&
        <View style={styles.content}>
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.job}>
            {desc}
          </Text>
        </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: { width: 110, height: 110, borderRadius: 110 / 2 },
  border: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.border
  },
  content: {
    alignItems: "center",
    marginTop: 16
  },
  name: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600]
  },
  job: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2
  },
  removePhoto: {
    position: "absolute",
    right: 8,
    bottom: 8
  }
});
