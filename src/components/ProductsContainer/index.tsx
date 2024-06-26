import React from "react";
import { View, Text } from "react-native";
import ProductItem from "../../components/ProductItem";
import productsGetir from "../../../assets/productsGetir";

export default function index() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text style={{ color: "grey", fontWeight: "bold", padding: 14 }}>
        Çubuk
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          flexWrap: 'wrap',
          flex:1,
          paddingVertical: 12,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}
