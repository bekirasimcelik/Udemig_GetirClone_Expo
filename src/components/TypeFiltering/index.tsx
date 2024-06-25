import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.045,
          marginRight: 12,
        },
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "#F0EFF7", borderWidth: 1.3 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849F7", fontWeight: "600" },
          item == active && { color: "#fff" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default function index() {
  const [category, setCategory] = useState("Birlikte İyi Gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.072,
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: height * 0.013,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
}
