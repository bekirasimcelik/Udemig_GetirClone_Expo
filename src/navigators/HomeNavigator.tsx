import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ImageBackgroundComponent,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons, Foundation } from "@expo/vector-icons";
import {
  useNavigation,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get("window");

function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomRightRadius: 8,
                  borderTopRightRadius: 8,
                }}
              >
                <Text
                  style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 12 }}
                >
                  {"\u20BA"}24,00
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 8 }}>
              <Foundation name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 12 }}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Sepetim</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 8 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight:8}}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
