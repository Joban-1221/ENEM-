import { Image, View, StyleSheet, Text, } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function BarraSuperior1() {
  return (
    <View style={styles3.div}>
      <View style={styles3.divConteudo}>
        <View style={styles3.nomeDiv}>
          <View>
            <Image source={require("../assets/icones/user.png")} style={styles3.iconPerfil} />
          </View>
          <View>
            <Text style={styles3.nomeBemVindo}>Olá, Ronan!!</Text>
          </View>
        </View>
        <View style={styles3.sininho}>
          <Image source={require("../assets/icones/sino.png")} style={styles3.icon} />
        </View>
      </View>
    </View>
  )
}

export function BarraSuperior2() {
  return (
    <View style={styles4.div}>
      <Image source={require("../assets/icones/user.png")} style={styles4.iconPerfil}/>
      <Text style={styles4.nome}>Ronan Santos</Text>
      <Text style={styles4.email}>ronan.santos@gmail.com</Text>
      <View style={styles4.editView}>
        <Ionicons
                      name={"create-outline"}
                      size={26}
                      color={"black"}
                    />
        <Text style={styles4.editar}>Editar Informações</Text>
      </View>
    </View>
  )
}

const styles3 = StyleSheet.create({
  div: {
    backgroundColor: "white",
    height: 150,
    justifyContent: "flex-end",
    width: "100%",
    borderBottomWidth: 2
  },
  divConteudo: {
    alignItems: "center",
    paddingBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
  icon: {
    height: 50,
    width: 50
  },
  sininho: {
    marginRight: 20
  },
  iconPerfil: {
    height: 80,
    width: 80
  },
  nomeDiv: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  nomeBemVindo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  }
});


const styles4 = StyleSheet.create({
  div: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    height: 330,
    borderBottomWidth: 2
  },
  iconPerfil: {
    width: 150,
    height: 150,
  },
  nome: {
    fontSize: 35,
    fontWeight: "bold"
  },
  email: {
    fontSize: 13
  },
  editView: {
    flexDirection: "row",
    alignItems: "center"
  }
})