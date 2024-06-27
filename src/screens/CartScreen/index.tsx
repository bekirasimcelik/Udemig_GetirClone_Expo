import { View, Text, FlatList } from "react-native";
import React from "react";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";

export default function index() {
  return (
    <FlatList
      data={productsGetir.slice(2,4)}
      renderItem={({ item }) => <CartItem product={item} />}
    />
  );
}
