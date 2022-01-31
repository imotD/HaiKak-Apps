import React from "react";
import { StyleSheet, View } from "react-native";
import { Gap, Header, List, Profile } from "../../components";
import { colors } from "../../utils";

export default function UserProfile({ navigation }) {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Profile" />
      <Gap height={10} />
      <Profile name="Shyana Melianda" desc="Product Designer" />
      <Gap height={14} />
      <List
        icon="edit-profile"
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
        onPress={() => navigation.navigate("UpdateProfile")}
      />
      <List
        icon="language"
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
      />
      <List
        icon="rate"
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
      />
      <List
        icon="help"
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
});
