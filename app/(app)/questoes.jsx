import { ScrollView, StyleSheet, View } from "react-native";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";

const opcoes = [
  {
    icon: "albums-outline",
    title: "Banco de questões",
    description: "Pratique por matéria, dificuldade e assunto.",
    meta: "320 questões cadastradas",
  },
  {
    icon: "timer-outline",
    title: "Simulado rápido",
    description: "Resolva uma lista curta com tempo controlado.",
    meta: "20 questões",
  },
  {
    icon: "document-text-outline",
    title: "Provas anteriores",
    description: "Treine com provas reais do ENEM.",
    meta: "Organizado por ano",
  },
  {
    icon: "stats-chart-outline",
    title: "Desempenho",
    description: "Acompanhe acertos, erros e assuntos pendentes.",
    meta: "Em construção",
  },
];

export default function Questoes() {
  return (
    <View style={styles.screen}>
      <PageHeader title="Questões" subtitle="Pratique e acompanhe sua evolução" />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {opcoes.map((opcao) => (
          <ContentCard key={opcao.title} {...opcao} />
        ))}
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
});
