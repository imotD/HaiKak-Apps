import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { launchImageLibrary } from "react-native-image-picker";
import { ILNullPhoto } from "../../assets";
import { Button, Gap, Header, Input, Profile } from "../../components";
import { Fire } from "../../config";
import { colors, getData, storeData } from "../../utils";

export default function UpdateProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: "",
    profession: "",
    email: ""
  });

  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getData("user").then(res => {
      const data = res;
      setPhoto = { uri: res.photo };
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
    data.photo = photoForDB;

    console.log("data profile", data);

    Fire.database()
      .ref(`user/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log("sukses", data);
        storeData("user", data);
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

  const getImage = () => {
    launchImageLibrary(
      { quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true },
      respone => {
        if (respone.didCancel || respone.error) {
          showMessage({
            message: "Oops, sepertinya anda belum memilih foto nya?",
            backgroundColor: colors.error,
            color: colors.white,
            type: "default"
          });
        } else {
          console.log("data photo", respone);
          const source = { uri: respone.assets[0].uri };

          const dataPhoto = `data:${respone.assets[0].type};base64,${respone
            .assets[0].base64}`;

          setPhotoForDB(dataPhoto);
          setPhoto(source);
        }
      }
    );
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Update Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile photo={photo} isRemove onPress={getImage} />
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
