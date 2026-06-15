import { useLocalSearchParams } from "expo-router";
import aulas from "../../../data/aulas/Lista.json";
import { StyleSheet, View, Text, ScrollView, useWindowDimensions } from "react-native";
import CardAula from "@/components/CardAula";
import PageHeader from "@/components/PageHeader";

import { useFonts } from "expo-font";
import {
  BebasNeue_400Regular,
} from "@expo-google-fonts/bebas-neue";

export default function ListarAulas() {
  const { materia } = useLocalSearchParams();
  const materiaSelecionada = Array.isArray(materia) ? materia[0] : materia;
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 28, 900);

  const [fontsLoaded] = useFonts({
    Gagalin: require("../../../assets/fonts/Gagalin-Regular.otf"),
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const dadosMateria = aulas[materiaSelecionada];

  if (!dadosMateria) {
    return (
      <View style={styles.screen}>
        <PageHeader title="Aulas" subtitle="Matéria não encontrada" />
        <View style={[styles.emptyState, { maxWidth: contentWidth }]}>
          <Text style={styles.emptyTitle}>Não encontramos essa lista.</Text>
          <Text style={styles.emptyText}>Volte para Cursos e escolha uma matéria disponível.</Text>
        </View>
      </View>
    );
  }

  const listaAulas = dadosMateria.aulas || [];
  const cor = dadosMateria.cor;

  return (
    <View style={styles.screen}>
      <PageHeader
        title={materiaSelecionada}
        subtitle={`${listaAulas.length} aulas organizadas para o ENEM`}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, { maxWidth: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.summary, { borderColor: cor }]}>
          <Text style={[styles.summaryNumber, { color: cor }]}>{listaAulas.length}</Text>
          <View style={styles.summaryTextGroup}>
            <Text style={styles.summaryTitle}>Aulas disponíveis</Text>
            <Text style={styles.summaryText}>Siga a sequência sugerida ou escolha um assunto específico.</Text>
          </View>
        </View>

        {listaAulas.map((aula, i) => (
          <CardAula
            key={aula.id || `${materiaSelecionada}-${i}`}
            index={i}
            numero={i + 1}
            titulo={aula.titulo}
            materia={materiaSelecionada}
            cor={cor}
            id={aula.id}
          />
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
  scroll: {
    flex: 1,
  },
  content: {
    alignSelf: "center",
    width: "100%",
    padding: 14,
    paddingBottom: 28,
  },
  summary: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  summaryNumber: {
    fontFamily: "Gagalin",
    fontSize: 42,
    minWidth: 64,
    textAlign: "center",
  },
  summaryTextGroup: {
    flex: 1,
    marginLeft: 12,
  },
  summaryTitle: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "bold",
  },
  summaryText: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 3,
  },
  emptyState: {
    alignSelf: "center",
    width: "100%",
    padding: 20,
  },
  emptyTitle: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "bold",
  },
  emptyText: {
    color: "#475569",
    fontSize: 15,
    marginTop: 6,
  },
});
