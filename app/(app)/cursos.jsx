import { ScrollView, StyleSheet, View } from "react-native";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";

const cursos = [
  {
    icon: "leaf-outline",
    title: "Biologia",
    description: "Ecologia, genética, fisiologia humana e evolução.",
    meta: "2 aulas para hoje",
  },
  {
    icon: "calculator-outline",
    title: "Matemática",
    description: "Razão, proporção, funções, geometria e estatística.",
    meta: "45% concluído",
  },
  {
    icon: "book-outline",
    title: "Linguagens",
    description: "Interpretação de texto, gêneros textuais e literatura.",
    meta: "Revisão recomendada",
  },
  {
    icon: "earth-outline",
    title: "Humanas",
    description: "História, geografia, filosofia e sociologia.",
    meta: "Novo módulo disponível",
  },
];

export default function Cursos() {
  return (
    <View style={styles.screen}>
      <PageHeader title="Cursos" subtitle="Continue seus estudos por área" />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {cursos.map((curso) => (
          <ContentCard key={curso.title} {...curso} />
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
