import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Gap, Input } from "../../components/atoms";
import { Header } from "../../components/molecules";
import { Fire } from "../../config";
import { colors, useForm } from "../../utils";

export default function Register({ navigation }) {
  const [form, setForm] = useForm({
    fullName: "",
    profession: "",
    email: "",
    password: ""
  });

  const onContinue = () => {
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        console.log("success", success);
      })
      .catch(error => {
        var errorMessage = error.message;
        console.log("errorMessage", errorMessage);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm("fullName", value)}
          />
          <Gap height={24} />
          <Input
            label="Job"
            value={form.profession}
            onChangeText={value => setForm("profession", value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm("email", value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm("password", value)}
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
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
