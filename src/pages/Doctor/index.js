import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DummyDoctor4, JSONCategoryDoctor, JSONTopDoctor } from "../../assets";
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor
} from "../../components";
import { colors, fonts } from "../../utils";

export default function Doctor({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={32} />
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate("UserProfile")} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate("ChooseDoctor")}
                    />
                  );
                })}
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {JSONTopDoctor.data.map(item => {
              return (
                <RatedDoctor
                  key={item.id}
                  name={item.name}
                  category={item.category}
                  avatar={DummyDoctor4}
                  onPress={() => navigation.navigate("ProfileDoctor")}
                />
              );
            })}
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Good News</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </View>
          <Gap height={22} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 1
  },
  wrapperSection: {
    paddingHorizontal: 16
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 211
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16
  },
  category: {
    flexDirection: "row"
  },
  wrapperScroll: {
    marginHorizontal: -16
  }
});
