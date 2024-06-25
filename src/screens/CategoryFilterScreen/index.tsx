import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import ProductsContainer from "../../components/ProductsContainer";

export default function index(props) {
  const [category, setCategory] = useState(props.route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
}
