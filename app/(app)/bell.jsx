import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { BarraSuperior1 } from '../../components/BarraSuperior';

export default function Bell() {
  return (
    <View>
      <BarraSuperior1/>

      <BellOpcao
        src="document-text-outline"
        titulo="Inscrições do ENEM abertas"
        desc="Inscrições abertas: de 25 de abril a 12 de junho"
      />

      <BellOpcao
        src="book-outline"
        titulo="Aula de Biologia disponível"
        desc="Assista sua aula de Biologia"
      />

      <BellOpcao
        src="calculator-outline"
        titulo="Novas questões disponíveis"
        desc="Responda novas questões de matemática"
      />


    </View>
  );
}

export function BellOpcao({ src, titulo, desc }) {
  return (
    <View style={styles.viewBell}>

      <Ionicons
        name={src}
        size={55}
        color="black"
      />

      <View style={styles.viewBell2}>

        <Text style={styles.textBell1}>
          {titulo}
        </Text>

        <Text style={styles.textBell2}>
          {desc}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewBell: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  viewBell2: {
    flex: 1,
  },

  textBell1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textBell2: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
});