import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";

const programas = [
  {
    icon: "school-outline",
    title: "SISU",
    description: "Seleção para universidades públicas usando a nota do ENEM.",
    meta: "Nota de corte, chamada regular e lista de espera",
  },
  {
    icon: "ribbon-outline",
    title: "PROUNI",
    description: "Bolsas integrais e parciais em faculdades privadas.",
    meta: "Atenção aos critérios de renda e escola",
  },
  {
    icon: "cash-outline",
    title: "FIES",
    description: "Financiamento estudantil para cursos superiores pagos.",
    meta: "Exige análise de renda e condições do contrato",
  },
];

const checklist = [
  "Salvar CPF, senha Gov.br e documentos pessoais.",
  "Acompanhar o edital oficial de cada programa.",
  "Separar comprovantes de renda e histórico escolar.",
  "Simular notas de corte antes do período de inscrição.",
  "Anotar prazos de chamada regular e lista de espera.",
];

export default function Programas() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 28, 900);

  return (
    <View style={styles.screen}>
      <PageHeader title="Programas" subtitle="SISU, PROUNI e FIES sem perder prazo" />

      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.contentContainer, { maxWidth: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons name="flag-outline" size={30} color="#025d90" />
          </View>
          <View style={styles.heroText}>
            <Text style={styles.heroTitle}>Depois do ENEM, começa outra etapa.</Text>
            <Text style={styles.heroDescription}>
              Use esta página para comparar os principais caminhos de ingresso e preparar os documentos antes das inscrições.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Principais programas</Text>
        {programas.map((programa) => (
          <ContentCard key={programa.title} {...programa} />
        ))}

        <Text style={styles.sectionTitle}>Checklist rápido</Text>
        <View style={styles.checklistCard}>
          {checklist.map((item) => (
            <View key={item} style={styles.checkItem}>
              <Ionicons name="checkmark-circle" size={22} color="#147a46" />
              <Text style={styles.checkText}>{item}</Text>
            </View>
          ))}
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
  heroCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  heroIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    color: "#111827",
    fontSize: 19,
    fontWeight: "bold",
  },
  heroDescription: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 4,
  },
  checklistCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c9dbe5",
    padding: 14,
  },
  checkItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  checkText: {
    flex: 1,
    color: "#334155",
    fontSize: 15,
    lineHeight: 21,
    marginLeft: 10,
  },
});
