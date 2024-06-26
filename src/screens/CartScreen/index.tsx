import { View, Text, FlatList } from "react-native";
import React from "react";
import productsGetir from "../../../assets/productsGetir";

export default function index() {
  return (
    <FlatList
      data={productsGetir}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}
