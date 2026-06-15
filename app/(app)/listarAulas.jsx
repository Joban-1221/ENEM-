import { useLocalSearchParams } from "expo-router";
import aulas from "../../data/aulas/Lista.json";
import { View, Text, ScrollView } from "react-native";
import CardAula from "@/components/CardAula";

import { useFonts } from "expo-font";
import {
  BebasNeue_400Regular,
} from "@expo-google-fonts/bebas-neue";

export default function ListarAulas() {
  const { materia } = useLocalSearchParams();

  const [fontsLoaded] = useFonts({
    Gagalin: require("../../assets/fonts/Gagalin-Regular.otf"),
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const listaAulas = aulas[materia].aulas || [];
  console.log(listaAulas)
  const cor = aulas[materia].cor

  return (
    <ScrollView style={{paddingTop: 60}}>
      <View style={{ alignItems: "center", paddingBottom: 60}}>
        <Text
          style={{
            fontSize: 50,
            fontFamily: "Gagalin",
            marginBottom: 10
          }}
        >
          {materia}
        </Text>

        <View style={{ width: "90%" }}>
          {listaAulas.map((aula, i) => (
            <CardAula
              key={i}
              index={i}
              numero={i+1}
              titulo={aula.titulo}
              materia={materia}
              cor={cor}
              id={aula.id}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}