import { View, Text } from "react-native";
import React, { useState } from "react";
import {Feather} from "@expo/vector-icons";

export default function index() {
  const [details, useDetails] = useState([
    "Sütlü Kıtır Çikolata Parçacıklarıyla Kaplı Vanilya Lezzet",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);
  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          paddingVertical: 10,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderBottomColor: "lightgray",
          flexDirection: 'row', alignItems:'center', justifyContent:'space-between'
        }}
      >
        <Text
          style={{
            color: index === 0 ? "#000" : "#687482",
            fontWeight: index === 0 ? "400" : "500",
            fontSize: index === 0 ? 10.5 : 13,
          }}
        >
          {detail}
        </Text>
        {index != 0 && 
        <Feather name="chevron-down" size={24} color="#9F9F9F"/>}
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
}
