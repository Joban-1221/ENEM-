import { ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";

const informacoes = [
  {
    icon: "school-outline",
    title: "SISU",
    description: "Sistema de seleção para universidades públicas.",
    meta: "Use sua nota do ENEM",
  },
  {
    icon: "cash-outline",
    title: "FIES",
    description: "Financiamento estudantil para cursos superiores.",
    meta: "Confira regras de renda",
  },
  {
    icon: "ribbon-outline",
    title: "PROUNI",
    description: "Bolsas integrais e parciais em faculdades privadas.",
    meta: "Acompanhe as chamadas",
  },
  {
    icon: "help-circle-outline",
    title: "Dúvidas frequentes",
    description: "Documentos, inscrição, local de prova e resultado.",
    meta: "Guia rápido",
  },
];

export default function Informacoes() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 28, 900);

  return (
    <View style={styles.screen}>
      <PageHeader title="Informações" subtitle="Entenda os caminhos depois da prova" />

      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.contentContainer, { maxWidth: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        {informacoes.map((item) => (
          <ContentCard key={item.title} {...item} />
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
  contentContainer: {
    alignSelf: "center",
    width: "100%",
    paddingBottom: 28,
  },
});
