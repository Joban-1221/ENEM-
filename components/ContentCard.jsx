import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ContentCard({ icon, title, description, meta, route, params, style }) {
  const router = useRouter();
  const isPressable = Boolean(route);

  function handlePress() {
    if (!route) return;
    router.push({ pathname: route, params });
  }

  return (
    <Pressable
      disabled={!isPressable}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.wrapper,
        style,
        isPressable && pressed && styles.pressed,
      ]}
    >
      <View style={[styles.card, !isPressable && styles.staticCard]}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={28} color="#025d90" />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          {meta ? <Text style={styles.meta}>{meta}</Text> : null}
        </View>

        {isPressable ? (
          <Ionicons name="chevron-forward" size={22} color="#7b8c95" />
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.75,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 88,
  },
  staticCard: {
    borderColor: "#c9dbe5",
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    color: "#111",
    fontSize: 17,
    fontWeight: "bold",
  },
  description: {
    color: "#444",
    fontSize: 14,
    marginTop: 3,
  },
  meta: {
    color: "#025d90",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 6,
  },
});
