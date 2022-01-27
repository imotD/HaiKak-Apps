import React from "react";
import { StyleSheet, View } from "react-native";
import { Header, List } from "../../components";
import { DummyDoctor2, JSONListDoctor } from "../../assets";
import { colors } from "../../utils";

export default function ChooseDoctor({ navigation }) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      {JSONListDoctor.data.map(item => {
        return (
          <List
            key={item.id}
            type="next"
            onPress={() => navigation.navigate("Chatting")}
            profile={DummyDoctor2}
            name={item.name}
            desc={item.desc}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  }
});
