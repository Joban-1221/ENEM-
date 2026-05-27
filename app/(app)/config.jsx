import React from 'react';
import { BarraSuperior2 } from '../../components/BarraSuperior';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function BasicScreen() {
  return (
    <View style={styles.divMaster}>
      <BarraSuperior2 />
      
      <OpcaoView
        src="musical-notes"
        titulo="Ajustar Volumes"
        desc="Volume da Aula, Volume da Atividade"
      />

      <OpcaoView
        src="calendar"
        titulo="Configurar Calendário"
        desc="Visibilidade de Datas, Eventos Importantes"
      />
    </View>
  );
}

export function OpcaoView({ src, titulo, desc }) {
  return (
    <View style={styles.viewConfig}>

      <Ionicons
        name={src}
        size={55}
        color="black"
      />

      <View style={styles.viewConfig2}>

        <Text style={styles.textConfig1}>
          {titulo}
        </Text>

        <Text style={styles.textConfig2}>
          {desc}
        </Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
        divMaster: {
        flex: 1,
  },
      title: {
        fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 8,
  },
      subtitle: {
        fontSize: 16,
      color: '#666',
  },
  viewConfig: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  viewConfig2: {
    flex: 1,
  },

  textConfig1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textConfig2: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
});