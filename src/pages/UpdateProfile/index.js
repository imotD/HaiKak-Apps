import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ILNullPhoto } from "../../assets";
import { Button, Gap, Header, Input, Profile } from "../../components";
import { Fire } from "../../config";
import { colors, getData } from "../../utils";

export default function UpdateProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: "",
    profession: "",
    email: "",
    photo: ILNullPhoto
  });

  const [password, setPassword] = useState("");

  useEffect(() => {
    getData("user").then(res => {
      const data = res;
      data.photo = { uri: res.photo };
      setProfile(data);
    });
  }, []);

  const onChangeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value
    });
  };

  const updateProfile = () => {
    const data = profile;
    data.photo = profile.photo.uri;

    Fire.database()
      .ref(`user/${profile.uid}/`)
      .update(profile)
      .then(res => {
        console.log("sukses", res);
        // navigation.goBack("UserProfile")
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: "default",
          backgroundColor: colors.error,
          color: colors.white
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Update Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile photo={profile.photo} isRemove />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={value => onChangeText("fullName", value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={value => onChangeText("profession", value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input label="Password" value={password} />
          <Gap height={40} />
          <Button title="Save Profile" onPress={updateProfile} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
});
