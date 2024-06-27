import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Product } from "../../models";

type CartItemProps = {
  product: Product;
};

const { width, height } = Dimensions.get("window");

export default function index({ product }: CardItemProps) {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          height: height * 0.13,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: width * 0.04,
          backgroundColor: "white",
          borderBottomColor: "red",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderWidth: 0.45,
              borderColor: "lightgrey",
              borderRadius: 8,
              padding:4,
            }}
          >
            <Image
              style={{
                width: height * 0.09,
                height: height * 0.09,
              }}
              source={{ uri: product.image }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.44,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: "#5D3EBD",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              {"\u20BA"}
              {product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: width * 0.21,
            borderColor: "lightgrey",
            borderWidth: 0.5,
            height: height * 0.037,
            borderRadius: 10,
            justifyContent: "space-around",
            alignItems: "center",
            shadowOpacity: 0.4,
            shadowColor: "gray",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>-</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5D3EBD",
              height: height * 0.037,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
              1
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
