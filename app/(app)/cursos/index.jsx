import { ScrollView, StyleSheet, View, Text, useWindowDimensions } from "react-native";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import aulas from "../../../data/aulas/Lista.json";

const cursos = [
  {
    area: "Linguagens e suas Tecnologias",
    materias: [
      {
        icon: "book-outline",
        title: "Português",
        description: "Gramática, interpretação e literatura.",
      },
      {
        icon: "language-outline",
        title: "Inglês",
        description: "Reading, vocabulary e interpretação.",
      },
      {
        icon: "chatbubble-outline",
        title: "Espanhol",
        description: "Vocabulário e compreensão textual.",
      },
    ],
  },
  {
    area: "Matemática e suas Tecnologias",
    materias: [
      {
        icon: "calculator-outline",
        title: "Matemática",
        description: "Funções, geometria e estatística.",
      },
    ],
  },
  {
    area: "Ciências da Natureza",
    materias: [
      {
        icon: "leaf-outline",
        title: "Biologia",
        description: "Ecologia, genética e evolução.",
      },
      {
        icon: "flask-outline",
        title: "Química",
        description: "Química orgânica e físico-química.",
      },
      {
        icon: "planet-outline",
        title: "Física",
        description: "Mecânica, óptica e eletricidade.",
      },
    ],
  },
  {
    area: "Ciências Humanas",
    materias: [
      {
        icon: "earth-outline",
        title: "História",
        description: "Brasil e mundo contemporâneo.",
      },
      {
        icon: "map-outline",
        title: "Geografia",
        description: "Geopolítica e meio ambiente.",
      },
      {
        icon: "people-outline",
        title: "Sociologia",
        description: "Sociedade e cultura.",
      },
      {
        icon: "library-outline",
        title: "Filosofia",
        description: "Pensamento filosófico.",
      },
    ],
  },
];

export default function Cursos() {
  const { width } = useWindowDimensions();
  const isWide = width >= 760;
  const contentWidth = Math.min(width - 28, 980);

  return (
    <View style={styles.screen}>
      <PageHeader title="Cursos" subtitle="Continue seus estudos por área" />

      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.contentContainer, { maxWidth: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        {cursos.map((grupo) => (
          <View key={grupo.area} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {grupo.area}
            </Text>

            <View style={styles.subjectGrid}>
              {grupo.materias.map((materia) => {
                const totalAulas = aulas[materia.title]?.aulas?.length || 0;

                return (
                  <ContentCard
                    key={materia.title}
                    {...materia}
                    meta={`${totalAulas} aulas`}
                    route="/cursos/listarAulas"
                    params={{ materia: materia.title }}
                    style={isWide ? styles.subjectCardWide : styles.subjectCard}
                  />
                );
              })}
            </View>
          </View>
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

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#003049",
    marginBottom: 10,
    marginLeft: 4,
  },
  subjectGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 12,
  },
  subjectCard: {
    width: "100%",
  },
  subjectCardWide: {
    flexBasis: "48%",
    flexGrow: 1,
  },
});
