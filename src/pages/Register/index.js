import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Gap, Input } from "../../components/atoms";
import { Header } from "../../components/molecules";
import { colors } from "../../utils";

export default function Register() {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Job" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
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
