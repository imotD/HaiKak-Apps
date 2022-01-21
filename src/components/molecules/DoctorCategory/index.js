import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILCatObat, ILCatPsikiater, ILCatUmum } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function DoctorCategory({ category }) {
  const Icon = () => {
    if (category === "dokter umum") {
      return <ILCatUmum style={styles.ilustration} />;
    }
    if (category === "psikiater") {
      return <ILCatPsikiater style={styles.ilustration} />;
    }
    if (category === "dokter obat") {
      return <ILCatObat style={styles.ilustration} />;
    }
    return <ILCatUmum style={styles.ilustration} />;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <View>
        <Text style={styles.label}>Saya butuh</Text>
        <Text style={styles.category}>
          {category}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: 100,
    height: 130,
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    marginRight: 10,
    alignSelf: "flex-start"
  },
  ilustration: {
    marginBottom: 28
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300]
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary
  }
});
