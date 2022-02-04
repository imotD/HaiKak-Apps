import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ILNullPhoto } from "../../assets";
import { Gap, Header, List, Profile } from "../../components";
import { Fire } from "../../config";
import { colors, getData } from "../../utils";

export default function UserProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: "",
    profession: "",
    photo: ILNullPhoto
  });

  useEffect(() => {
    getData("user").then(res => {
      const data = res;
      data.photo = { uri: res.photo };
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        console.log("sukses sign out");
        navigation.replace("GetStarted");
      })
      .catch(err => {
        showMessage({
          message: err.message,
          backgroundColor: colors.error,
          color: colors.white,
          type: "default"
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Profile" />
      <Gap height={10} />
      {profile.fullName.length > 0 &&
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
        />}
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
        name="Sign Out"
        desc="Last updated yesterday"
        type="next"
        onPress={signOut}
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
