import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import { useLocalSearchParams, useRouter } from "expo-router";
import aulas from "../../../data/aulas/Lista.json";

export default function VideoScreen() {
  const router = useRouter();
  const { materia, index } = useLocalSearchParams();
  const materiaSelecionada = Array.isArray(materia) ? materia[0] : materia;
  const aulaIndex = Number(Array.isArray(index) ? index[0] : index);
  const dadosMateria = aulas[materiaSelecionada];
  const listaAulas = dadosMateria?.aulas || [];
  const aula = Number.isInteger(aulaIndex) ? listaAulas[aulaIndex] : null;
  const cor = dadosMateria?.cor || "#025d90";
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 28, 900);
  const videoWidth = Math.min(contentWidth - 28, 760);
  const videoHeight = Math.round(videoWidth * 0.5625);
  const [playing, setPlaying] = useState(false);

  if (!aula) {
    return (
      <View style={styles.container}>
        <View style={[styles.header, { maxWidth: contentWidth }]}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={cor} />
            <Text style={[styles.backText, { color: cor }]}>Voltar</Text>
          </Pressable>
          <Text style={styles.titulo}>Aula não encontrada</Text>
          <Text style={styles.texto}>Volte para a lista e escolha uma aula disponível.</Text>
        </View>
      </View>
    );
  }

  const numero = String(aulaIndex + 1).padStart(2, "0");
  const objetivos = Array.isArray(aula.objetivos) ? aula.objetivos : [];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.contentContainer, { maxWidth: contentWidth }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={cor} />
          <Text style={[styles.backText, { color: cor }]}>Aulas</Text>
        </Pressable>

        <Text style={[styles.numero, { color: cor }]}>AULA {numero}</Text>
        <Text style={styles.titulo}>{aula.titulo}</Text>
      </View>

      <View style={[styles.videoContainer, { width: videoWidth }]}>
        <YoutubePlayer
          height={videoHeight}
          width={videoWidth}
          play={playing}
          videoId={aula.id}
          onChangeState={(state) => setPlaying(state === "playing")}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Sobre a aula</Text>
        <Text style={styles.texto}>{aula.descricao || "Descrição em atualização."}</Text>

        <Text style={styles.sectionTitle}>Objetivos</Text>
        <View style={styles.objectivesList}>
          {objetivos.map((objetivo) => (
            <View key={objetivo} style={styles.objectiveItem}>
              <Text style={[styles.bullet, { color: cor }]}>•</Text>
              <Text style={styles.objectiveText}>{objetivo}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  contentContainer: {
    alignSelf: "center",
    width: "100%",
    paddingBottom: 28,
  },
  header: {
    alignSelf: "center",
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 40,
    marginBottom: 14,
  },
  backText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 2,
  },
  numero: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
  },
  titulo: {
    color: "#0F172A",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
    marginTop: 5,
  },
  videoContainer: {
    alignSelf: "center",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFF",
    elevation: 4,
  },
  content: {
    paddingHorizontal: 14,
    paddingTop: 20,
  },
  sectionTitle: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  texto: {
    color: "#475569",
    fontSize: 16,
    lineHeight: 25,
  },
  objectivesList: {
    gap: 10,
  },
  objectiveItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bullet: {
    fontSize: 20,
    lineHeight: 24,
    marginRight: 8,
  },
  objectiveText: {
    flex: 1,
    color: "#475569",
    fontSize: 16,
    lineHeight: 24,
  },
});
