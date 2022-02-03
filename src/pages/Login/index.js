import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ILLogo } from "../../assets";
import { Loading } from "../../components";
import { Input, Link, Button, Gap } from "../../components/atoms";
import { Fire } from "../../config";
import { colors, fonts, storeData, useForm } from "../../utils";

export default function Login({ navigation }) {
  const [form, setForm] = useForm({
    email: "tommy@gmail.com",
    password: "1234567890"
  });

  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        setLoading(false);
        // setForm("reset");
        Fire.database()
          .ref(`user/${res.user.uid}/`)
          .once("value")
          .then(resDB => {
            console.log("data user", resDB.val());
            if (resDB.val()) {
              storeData("user", resDB.val());
              navigation.replace("MainApp");
            }
          });
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          backgroundColor: colors.error,
          color: colors.white,
          type: "default"
        });
      });
  };

  return (
    <React.Fragment>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm("email", value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm("password", value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forget My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={onLogin} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate("Register")}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    flex: 1
  },
  title: {
    fontSize: 20,
    maxWidth: 153,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40
  }
});
