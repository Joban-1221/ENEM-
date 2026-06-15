import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PageHeader({ title, subtitle }) {
  const router = useRouter();

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace("/");
  }

  return (
    <View style={styles.header}>
      <Pressable style={styles.backButton} onPress={handleBack}>
        <Ionicons name="chevron-back" size={26} color="#025d90" />
      </Pressable>

      <View style={styles.textGroup}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    minHeight: 120,
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 18,
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  textGroup: {
    flex: 1,
  },
  title: {
    color: "#111",
    fontSize: 26,
    fontWeight: "bold",
    flexShrink: 1,
  },
  subtitle: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
    lineHeight: 19,
  },
});
