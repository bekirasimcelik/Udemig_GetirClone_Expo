import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo,Feather,FontAwesome ,MaterialCommunityIcons} from '@expo/vector-icons'; 
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();
export default function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AnaSayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="AnaSayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
