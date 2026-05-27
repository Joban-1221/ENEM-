import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export function AcessarCursos() {
  return (
    <View style={styles.opcao}>
      <View style={styles.divAgrupa}>
        <View style={styles.divImagem}>
          <Image source={require("../assets/icones/livros.png")} style={styles.iconOpcao} />
        </View>
        <View style={styles.textos}>
          <View style={styles.titulo}><Text style={styles.tituloText}>Acesar Cursos</Text></View>
          <View style={styles.carregamento}>
            <View style={styles.divDentro}>
              <View style={styles.divFora}></View>
            </View>
            <View>
              <Text style={styles.porcentagem}>45%</Text>
            </View>
          </View>
          <View style={styles.obs}><Text style={styles.obsText}>Lições do Dia: Biologia e Matemática</Text></View>
        </View>
      </View>
    </View>
  );
}

export function ModeloOpcoes({ url, titulo, topico1, topico2, topico3, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.opcao}>
        <View style={styles.divAgrupa}>
          <View style={styles.divImagem}>
            <Image source={url} style={styles.iconOpcao} />
          </View>
          <View style={styles.textos}>
            <Text style={styles.tituloText}>{titulo}</Text>

            <View style={styles.topico}>
              <Text style={styles.bolinha}>•</Text>
              <Text>{topico1}</Text>
            </View>

            <View style={styles.topico}>
              <Text style={styles.bolinha}>•</Text>
              <Text>{topico2}</Text>
            </View>

            <View style={styles.topico}>
              <Text style={styles.bolinha}>•</Text>
              <Text>{topico3}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  divMaster: {
    flex: 1,
    backgroundColor: "white"
  },
  divOpcoes: {
    marginTop: 175,
    backgroundColor: "#dff3ff",
    flex: 1,
    paddingTop: 10,
    marginBottom: 100
  },
  opcao: {
    height: 150,
    borderRadius: 15,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2
  },
  divAgrupa: {
    flexDirection: "row",
    alignItems: "stretch",
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  },
  iconOpcao: {
    width: 100,
    height: 100,
    marginRight: 20
  },
  textos: {
    width: 200,
    justifyContent: "space-between"
  },
  titulo: {
  },
  tituloText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  divDentro: {
    backgroundColor: "#ffe7c9",
    width: "100%",
    height: 15,
    borderRadius: 50
  },
  divFora: {
    backgroundColor: "#ff8c00",
    width: "45%",
    height: 15,
    borderRadius: 50
  },
  porcentagem: {
    textAlign: "center"
  },
  obsText: {
    fontSize: 10,
    textAlign: "center"
  },
  carregamento: {
    marginLeft: 10,
    marginRight: 10
  },
  topico: {
    flexDirection: "row",
    alignItems: "center",
  },

  bolinha: {
    marginRight: 8,
    fontSize: 18
  }
});