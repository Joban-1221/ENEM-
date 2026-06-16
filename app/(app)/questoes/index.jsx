import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import { router } from "expo-router";

const opcoes = [
  {
    icon: "albums-outline",
    title: "Banco de questões",
    description: "Pratique por matéria, dificuldade e assunto.",
    meta: "320 questões cadastradas",
    route: "/questoes/bancoQuestoes",
  },
  {
    icon: "timer-outline",
    title: "Simulado rápido",
    description: "Resolva uma lista curta com tempo controlado.",
    meta: "20 questões",
    route: "/questoes/simulado",
  },
  {
    icon: "document-text-outline",
    title: "Provas anteriores",
    description: "Treine com provas reais do ENEM.",
    meta: "Organizado por ano",
    route: "/questoes/provas",
  },
  {
    icon: "stats-chart-outline",
    title: "Desempenho",
    description: "Acompanhe acertos, erros e assuntos pendentes.",
    meta: "Em construção",
    route: "/questoes/desempenho",
  },
];

export default function Questoes() {
  return (
    <View style={styles.screen}>
      <PageHeader
        title="Questões"
        subtitle="Pratique e acompanhe sua evolução"
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {opcoes.map((opcao) => (
          <Pressable
            key={opcao.title}
            onPress={() => router.push(opcao.route)}
          >
            <ContentCard {...opcao} />
          </Pressable>
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