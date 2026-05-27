import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: true,

        tabBarStyle: {
          height: 70,
          paddingBottom: 90,
          paddingTop: 10,
          backgroundColor: "#025d90",
        },

        tabBarLabelStyle: {
          fontSize: 12,
        },

        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#cfe8ff",
      }}
    >

      <Tabs.Screen
        name="bell"
        options={{
          title: "Nodificações",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Início",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}