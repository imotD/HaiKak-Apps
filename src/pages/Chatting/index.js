import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChatInput, ChatItem, Header } from "../../components";
import { colors, fonts } from "../../utils";

export default function Chatting({ navigation }) {
  return (
    <View>
      <Header
        type="dark-profile"
        title="Nama Dokter"
        desc="Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: "center"
  }
});
