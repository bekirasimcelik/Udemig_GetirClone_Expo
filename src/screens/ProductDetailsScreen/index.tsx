import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const [product, setProduct] = useState();

export default function index(props) {
  useEffect(() => {
    setProduct(props.route.params.product)
  }, [])
  return (
    <View>
      <Text>Asım</Text>
    </View>
  );
}
