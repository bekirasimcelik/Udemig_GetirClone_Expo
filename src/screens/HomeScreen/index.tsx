import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import MainCategories from "../../components/MainCategories";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}
