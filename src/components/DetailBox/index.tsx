import { View, Text } from "react-native";
import React from "react";

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};

export default function index({ price, name, quantity }: DetailBoxProps) {
  return (
    <View
      style={{ width: "100%", alignItems: "center", backgroundColor: "white" }}
    >
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 10,
        }}
      >
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={{fontSize:16, fontWeight:'600', marginTop:12}}>{name}</Text>
      <Text style={{color:'#848897', fontWeight:'600', marginTop:6, paddingBottom: 10}}>{quantity}</Text>
    </View>
  );
}
