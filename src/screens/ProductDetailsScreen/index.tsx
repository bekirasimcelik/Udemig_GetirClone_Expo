import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ImageCarousel from "../../components/ImageCarousel";
import { Product } from "../../models";

export default function index(props) {
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }
  return (
    <View>
      <ImageCarousel images={product.images} />
    </View>
  );
}
