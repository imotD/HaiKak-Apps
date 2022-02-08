import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { launchImageLibrary } from "react-native-image-picker";
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from "../../assets";
import { Button, Gap, Header, Link } from "../../components";
import { Fire } from "../../config";
import { colors, fonts, storeData } from "../../utils";

export default function UploadPhoto({ navigation, route }) {
  const { fullName, profession, uid } = route.params;

  const [photoForDB, setPhotoForDB] = useState("");
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);

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
          setHasPhoto(true);
        }
      }
    );
  };

  const uploadAndContinue = () => {
    Fire.database().ref("users/" + uid + "/").update({ photo: photoForDB });

    const data = route.params;
    data.photo = photoForDB;
    storeData("users", data);

    navigation.replace("MainApp");
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>
            {fullName}
          </Text>
          <Text style={styles.profession}>
            {profession}
          </Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace("MainApp")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: "space-between"
  },
  profile: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  addPhoto: {
    position: "absolute",
    right: 6,
    bottom: 8
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: "center"
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: "center",
    color: colors.text.secondary
  }
});
