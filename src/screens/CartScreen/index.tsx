import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";

const { width, height } = Dimensions.get("window");

export default function index() {
  return (
    <View style={{flex:1}}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={productsGetir.slice(0, 4)}
          renderItem={({ item }) => <CartItem product={item} />}
        />
        <Text style={{padding:15, fontWeight:'bold', color:'#5D3EBD'}}>Önerilen ürünler</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{backgroundColor:'white'}}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.12,
          paddingHorizontal: "4%",
          width: "100%",
          backgroundColor: "#f8f8f8",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: "#5D3EBD",
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            height: height * 0.06,
            marginTop: -10,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>
            24,00
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
