import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PageHeader from "@/components/PageHeader";

const areas = [
  { icon: "book-outline", title: "Linguagens", questions: 15, color: "#cf8621" },
  { icon: "calculator-outline", title: "Matemática", questions: 15, color: "#025d90" },
  { icon: "leaf-outline", title: "Natureza", questions: 15, color: "#147a46" },
  { icon: "earth-outline", title: "Humanas", questions: 15, color: "#7c3aed" },
];

const modes = [
  {
    icon: "flash-outline",
    title: "Rápido",
    description: "20 questões para treinar em pouco tempo.",
    meta: "30 min",
  },
  {
    icon: "timer-outline",
    title: "Completo",
    description: "Simulado maior, com equilíbrio entre áreas.",
    meta: "2h",
  },
  {
    icon: "construct-outline",
    title: "Personalizado",
    description: "Escolha matérias e quantidade de questões.",
    meta: "Você define",
  },
];

export default function Simulado() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 28, 900);
  const isCompact = width < 420;

  return (
    <View style={styles.screen}>
      <PageHeader title="Simulado" subtitle="Monte um treino com tempo, áreas e metas" />

      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.contentContainer, { maxWidth: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Ionicons name="stopwatch-outline" size={34} color="#025d90" />
          </View>
          <View style={styles.summaryText}>
            <Text style={styles.summaryTitle}>Treino recomendado</Text>
            <Text style={styles.summaryDescription}>
              60 questões, pausa curta no meio e correção por área no final.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Escolha o modo</Text>
        <View style={styles.modeGrid}>
          {modes.map((mode) => (
            <Pressable key={mode.title} style={({ pressed }) => [styles.modeCard, pressed && styles.pressed]}>
              <View style={styles.modeTop}>
                <Ionicons name={mode.icon} size={25} color="#025d90" />
                <Text style={styles.modeMeta}>{mode.meta}</Text>
              </View>
              <Text style={styles.modeTitle}>{mode.title}</Text>
              <Text style={styles.modeDescription}>{mode.description}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Distribuição por área</Text>
        <View style={styles.areaGrid}>
          {areas.map((area) => (
            <View key={area.title} style={[styles.areaCard, isCompact ? styles.areaFull : styles.areaHalf]}>
              <View style={[styles.areaIcon, { backgroundColor: `${area.color}20` }]}>
                <Ionicons name={area.icon} size={24} color={area.color} />
              </View>
              <View style={styles.areaText}>
                <Text style={styles.areaTitle}>{area.title}</Text>
                <Text style={styles.areaMeta}>{area.questions} questões</Text>
              </View>
            </View>
          ))}
        </View>

        <Pressable style={({ pressed }) => [styles.startButton, pressed && styles.pressed]}>
          <Ionicons name="play-circle-outline" size={24} color="white" />
          <Text style={styles.startText}>Iniciar simulado</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#dff3ff",
  },
  content: {
    flex: 1,
    padding: 14,
  },
  contentContainer: {
    alignSelf: "center",
    width: "100%",
    paddingBottom: 28,
  },
  summaryCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  summaryIcon: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  summaryText: {
    flex: 1,
  },
  summaryTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "bold",
  },
  summaryDescription: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modeGrid: {
    gap: 12,
    marginBottom: 18,
  },
  modeCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c9dbe5",
    padding: 14,
  },
  modeTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  modeMeta: {
    color: "#025d90",
    backgroundColor: "#e9f7ff",
    borderRadius: 999,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: "bold",
  },
  modeTitle: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "bold",
  },
  modeDescription: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
  areaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 18,
  },
  areaCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c9dbe5",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  areaHalf: {
    flexGrow: 1,
    flexBasis: "47%",
  },
  areaFull: {
    flexBasis: "100%",
  },
  areaIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  areaText: {
    flex: 1,
  },
  areaTitle: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "bold",
  },
  areaMeta: {
    color: "#475569",
    fontSize: 13,
    marginTop: 2,
  },
  startButton: {
    backgroundColor: "#025d90",
    borderRadius: 12,
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  startText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
