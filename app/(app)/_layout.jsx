import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@/contexts/AuthContext";

export default function Layout() {
  const insets = useSafeAreaInsets();
  //const { isAuthenticated } = useAuth();
  //
  //if (!isAuthenticated) {
  //  return <Redirect href="/login" />;
  //}

  return (
    <Tabs
      initialRouteName="index"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 64 + insets.bottom,
          paddingBottom: Math.max(insets.bottom, 10),
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
          title: "Notificações",
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

      <Tabs.Screen name="cursos" options={{ href: null }} />
      <Tabs.Screen name="aula" options={{ href: null }} />
      <Tabs.Screen name="questoes" options={{ href: null }} />
      <Tabs.Screen name="calendario" options={{ href: null }} />
      <Tabs.Screen name="informacoes" options={{ href: null }} />
      <Tabs.Screen name="listarAulas" options={{ href: null }} />
      <Tabs.Screen name="telaAula" options={{ href: null }} />
    </Tabs>
  );
}
