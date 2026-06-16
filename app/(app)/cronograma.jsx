import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PageHeader from "@/components/PageHeader";

const semanas = [
  {
    title: "Segunda",
    focus: "Matemática + Redação",
    tasks: ["Funções e porcentagem", "Repertório sociocultural", "20 questões"],
  },
  {
    title: "Terça",
    focus: "Linguagens",
    tasks: ["Interpretação de texto", "Gramática aplicada", "Revisão de erros"],
  },
  {
    title: "Quarta",
    focus: "Natureza",
    tasks: ["Biologia", "Química", "Física básica"],
  },
  {
    title: "Quinta",
    focus: "Humanas",
    tasks: ["História", "Geografia", "Sociologia/Filosofia"],
  },
  {
    title: "Sexta",
    focus: "Treino misto",
    tasks: ["Questões por dificuldade", "Correção comentada", "Mapa de lacunas"],
  },
  {
    title: "Sábado",
    focus: "Simulado",
    tasks: ["Prova cronometrada", "Correção", "Atualizar metas"],
  },
];

const metas = [
  { value: "2h", label: "por dia útil" },
  { value: "80", label: "questões por semana" },
  { value: "1", label: "redação semanal" },
];

export default function Cronograma() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 28, 980);
  const isWide = width >= 760;

  return (
    <View style={styles.screen}>
      <PageHeader title="Cronograma" subtitle="Uma rotina simples para manter constância" />

      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.contentContainer, { maxWidth: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.goalRow}>
          {metas.map((meta) => (
            <View key={meta.label} style={styles.goalCard}>
              <Text style={styles.goalValue}>{meta.value}</Text>
              <Text style={styles.goalLabel}>{meta.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Plano semanal</Text>
        <View style={styles.weekGrid}>
          {semanas.map((dia) => (
            <View key={dia.title} style={[styles.dayCard, isWide ? styles.dayCardWide : styles.dayCardFull]}>
              <View style={styles.dayHeader}>
                <View style={styles.dayIcon}>
                  <Ionicons name="calendar-outline" size={22} color="#025d90" />
                </View>
                <View style={styles.dayText}>
                  <Text style={styles.dayTitle}>{dia.title}</Text>
                  <Text style={styles.dayFocus}>{dia.focus}</Text>
                </View>
              </View>

              {dia.tasks.map((task) => (
                <View key={task} style={styles.taskRow}>
                  <View style={styles.taskDot} />
                  <Text style={styles.taskText}>{task}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.reviewCard}>
          <Ionicons name="refresh-circle-outline" size={28} color="#025d90" />
          <View style={styles.reviewText}>
            <Text style={styles.reviewTitle}>Domingo é revisão leve</Text>
            <Text style={styles.reviewDescription}>
              Releia resumos, veja seus erros da semana e escolha o primeiro tema da segunda-feira.
            </Text>
          </View>
        </View>
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
  goalRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 18,
  },
  goalCard: {
    flexGrow: 1,
    flexBasis: 150,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 15,
    alignItems: "center",
  },
  goalValue: {
    color: "#025d90",
    fontSize: 30,
    fontWeight: "bold",
  },
  goalLabel: {
    color: "#475569",
    fontSize: 14,
    marginTop: 2,
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weekGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  dayCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c9dbe5",
    padding: 14,
  },
  dayCardFull: {
    flexBasis: "100%",
  },
  dayCardWide: {
    flexGrow: 1,
    flexBasis: "31%",
  },
  dayHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  dayIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  dayText: {
    flex: 1,
  },
  dayTitle: {
    color: "#111827",
    fontSize: 17,
    fontWeight: "bold",
  },
  dayFocus: {
    color: "#025d90",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 2,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  taskDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#ff8c00",
    marginRight: 9,
  },
  taskText: {
    flex: 1,
    color: "#334155",
    fontSize: 14,
    lineHeight: 19,
  },
  reviewCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 15,
    marginTop: 16,
    flexDirection: "row",
  },
  reviewText: {
    flex: 1,
    marginLeft: 10,
  },
  reviewTitle: {
    color: "#111827",
    fontSize: 17,
    fontWeight: "bold",
  },
  reviewDescription: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
});
