import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DummyDoctor2, JSONListDoctor } from "../../assets";
import List from "../../components/molecules/List";
import { colors, fonts } from "../../utils";

export default function Messages({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {JSONListDoctor.data.map(item => {
          return (
            <List
              key={item.id}
              profile={DummyDoctor2}
              name={item.name}
              desc={item.desc}
              onPress={() => navigation.navigate("Chatting")}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
});
