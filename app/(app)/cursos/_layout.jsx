import { Stack } from "expo-router";

export default function CursosLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="listarAulas" />
      <Stack.Screen name="aula" />
    </Stack>
  );
}
