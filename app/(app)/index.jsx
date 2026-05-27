import { StyleSheet, View, ScrollView } from 'react-native';
import BarraInferior from "@/components/BarraInferior";
import {BarraSuperior1} from '@/components/BarraSuperior';
import { ModeloOpcoes, AcessarCursos } from '@/components/MoldeOpcoes';
import OkIcon from "@/assets/icones/ok.png"
import { useRouter } from 'expo-router';
import CalendarioIcon from "@/assets/icones/calendario.webp"
import InforIcon from "@/assets/icones/infor.webp"

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.divMaster}>
      <BarraSuperior1 />
      < ScrollView style={styles.divOpcoes} showsVerticalScrollIndicator={false}>
        <AcessarCursos />

          <ModeloOpcoes
            url={OkIcon}
            titulo={"Realizar Questões"}
            topico1={"Banco de questões ENEM"}
            topico2={"Simulados"}
            topico3={"Provas Anteriores"}
          />

        <ModeloOpcoes
          url={CalendarioIcon}
          titulo={"Calendário ENEM"}
          topico1={"Provas"}
          topico2={"Gabaritos"}
          topico3={"Chamadas"}
        />

        <ModeloOpcoes
          url={InforIcon}
          titulo={"Informações"}
          topico1={"SISU, FIES, PROUNI"}
          topico2={"Inscrição"}
          topico3={"Segunda Chamada"}
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  divMaster: {
    flex: 1,
  },
  divOpcoes: {
    backgroundColor: "#dff3ff",
    flex: 1,
    paddingTop: 10,
  }
});