import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Gap, Input } from "../../components/atoms";
import { Header } from "../../components/molecules";
import { colors } from "../../utils";

export default function Register({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onContinue = () => {
    // () => navigation.navigate("UploadPhoto")
    console.log(fullName, profession, email, password);
  };

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={fullName}
            onChangeText={value => setFullName(value)}
          />
          <Gap height={24} />
          <Input
            label="Job"
            value={profession}
            onChangeText={value => setProfession(value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
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
