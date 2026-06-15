import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function ContinueStudyCard({ onPress }) {
  return (
    <Pressable style={({ pressed }) => [styles.studyCard, pressed && styles.pressed]} onPress={onPress}>
      <View style={styles.studyTop}>
        <Image source={require("../assets/icones/livros.png")} style={styles.studyIcon} />
        <View style={styles.studyText}>
          <Text style={styles.eyebrow}>Próximo passo</Text>
          <Text style={styles.studyTitle}>Continuar estudos</Text>
          <Text style={styles.studyDescription}>Biologia e Matemática estão na sua fila de hoje.</Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>45%</Text>
      </View>
    </Pressable>
  );
}

export function HomeShortcut({ icon, title, description, onPress, style }) {
  return (
    <Pressable style={({ pressed }) => [styles.shortcut, style, pressed && styles.pressed]} onPress={onPress}>
      <View style={styles.shortcutIcon}>
        <Ionicons name={icon} size={28} color="#025d90" />
      </View>
      <Text style={styles.shortcutTitle}>{title}</Text>
      <Text style={styles.shortcutDescription}>{description}</Text>
    </Pressable>
  );
}

export const AcessarCursos = ContinueStudyCard;

export function ModeloOpcoes({ titulo, topico1, topico2, topico3, onPress }) {
  return (
    <HomeShortcut
      icon="apps-outline"
      title={titulo}
      description={[topico1, topico2, topico3].filter(Boolean).join(" • ")}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  studyCard: {
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 2,
    padding: 16,
    marginBottom: 14,
  },
  pressed: {
    opacity: 0.75,
  },
  studyTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  studyIcon: {
    width: 74,
    height: 74,
    marginRight: 14,
  },
  studyText: {
    flex: 1,
  },
  eyebrow: {
    color: "#025d90",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 2,
  },
  studyTitle: {
    color: "#111",
    fontSize: 22,
    fontWeight: "bold",
  },
  studyDescription: {
    color: "#444",
    fontSize: 14,
    marginTop: 3,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  progressTrack: {
    backgroundColor: "#ffe7c9",
    flex: 1,
    height: 14,
    borderRadius: 50,
    overflow: "hidden",
  },
  progressFill: {
    backgroundColor: "#ff8c00",
    width: "45%",
    height: "100%",
  },
  progressText: {
    color: "#111",
    fontWeight: "bold",
    marginLeft: 10,
  },
  shortcut: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 14,
    flexGrow: 1,
    flexBasis: "48%",
    minHeight: 150,
  },
  shortcutIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  shortcutTitle: {
    color: "#111",
    fontSize: 16,
    fontWeight: "bold",
  },
  shortcutDescription: {
    color: "#555",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 5,
  },
});
