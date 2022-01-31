import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, Profile, ProfileItems } from "../../components";
import { colors } from "../../utils";

export default function ProfileDoctor({ navigation }) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Shyana Melianda" desc="Product Designer" />
      <Gap height={10} />
      <ProfileItems label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItems label="Tempat Praktik" value="Rumah Sakit Umum, Bandung " />
      <ProfileItems label="No. STR" value="0000116622081996" />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate("Chatting")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23
  }
});
