import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ILNullPhoto } from "../../../assets";
import { colors, fonts, getData } from "../../../utils";

export default function HomeProfile({ onPress }) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: "",
    profession: ""
  });

  useEffect(() => {
    getData("user").then(res => {
      const data = res;
      data.photo = { uri: res.photo };
      setProfile(res);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.avatar} source={profile.photo} />
      <View>
        <Text style={styles.name}>
          {profile.fullName}
        </Text>
        <Text style={styles.job}>
          {profile.profession}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
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
    color: colors.text.primary,
    textTransform: "capitalize"
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: "capitalize"
  }
});
