import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import aulas from "../../data/aulas/Lista.json";
import { useLocalSearchParams } from "expo-router";


export default function VideoScreen() {

  const { materia, index } = useLocalSearchParams();
  const listaAulas = aulas[materia].aulas || [];
  let cor = aulas[materia].cor
  const [playing, setPlaying] = useState(false);

  const numero = "0" + (parseInt(index) + 1)

  const aula = listaAulas[index]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.numero, { color: cor }]}>AULA {numero}</Text>
        <Text style={styles.titulo}>{aula.titulo}</Text>
      </View>

      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={209}
          play={playing}
          videoId={aula.id}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Sobre a aula</Text>

        <Text style={styles.texto}>
          {aula.descricao}
        </Text>

        <Text style={styles.sectionTitle}>Objetivos</Text>

        <Text style={styles.texto}>
          {"• " + aula.objetivos.join("\n• ")}
        </Text>
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  numero: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 5,
  },

  videoContainer: {
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#FFF",
    elevation: 4,
  },

  content: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 15,
    marginBottom: 10,
  },

  texto: {
    fontSize: 16,
    lineHeight: 25,
    color: "#475569",
  },
});