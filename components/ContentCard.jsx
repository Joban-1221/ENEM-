import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ContentCard({ icon, title, description, meta, id }) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push({pathname: "/listarAulas", params: {materia: title}})}>
      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={28} color="#025d90" />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          {meta ? <Text style={styles.meta}>{meta}</Text> : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
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
