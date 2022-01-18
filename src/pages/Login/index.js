import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILLogo } from "../../assets";
import { Input, Link, Button, Gap } from "../../components/atoms";
import { colors } from "../../utils";

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forget My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1
  },
  title: {
    fontSize: 20,
    maxWidth: 153,
    fontFamily: "Nunito-SemoBold",
    color: colors.text.primary,
    marginVertical: 40
  }
});
