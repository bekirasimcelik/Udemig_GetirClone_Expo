import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

const { width, height } = Dimensions.get("window");

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: "row",
          alignItems: "center",
        },
        item.name == active.name && { borderBottomColor: "#FFD00C", borderBottomWidth:2.5 },
      ]}
    >
      <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
        {item.name}
      </Text>
    </View>
  );
};
export default function index({ category: Category }) {
  const [categories, useCategories] = useState(categoriesGetir);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={Category} />
      ))}
    </ScrollView>
  );
}
