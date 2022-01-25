import React from "react";
import { StyleSheet, View } from "react-native";
import { Header, ListDoctor } from "../../components";
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
          <ListDoctor
            key={item.id}
            type="next"
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
