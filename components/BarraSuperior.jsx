import { Image, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthContext";

export function BarraSuperior1() {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] || "Estudante";

  return (
    <View style={styles3.div}>
      <View style={styles3.divConteudo}>
        <View style={styles3.nomeDiv}>
          <Image source={require("../assets/icones/user.png")} style={styles3.iconPerfil} />
          <View style={styles3.textGroup}>
            <Text style={styles3.nomeBemVindo}>Olá, {firstName}!</Text>
            <Text style={styles3.subtitulo}>Vamos avançar um pouco hoje?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export function BarraSuperior2() {
  const { user } = useAuth();

  return (
    <View style={styles4.div}>
      <Image source={require("../assets/icones/user.png")} style={styles4.iconPerfil} />
      <Text style={styles4.nome}>{user?.name || "Estudante"}</Text>
      <Text style={styles4.email}>{user?.email || "email@exemplo.com"}</Text>

      <View style={styles4.editView}>
        <Ionicons name="create-outline" size={26} color="black" />
        <Text style={styles4.editar}>Editar Informações</Text>
      </View>
    </View>
  );
}

const styles3 = StyleSheet.create({
  div: {
    backgroundColor: "white",
    height: 150,
    justifyContent: "flex-end",
    width: "100%",
    borderBottomWidth: 2,
  },
  divConteudo: {
    alignItems: "center",
    paddingBottom: 10,
    flexDirection: "row",
    width: "100%",
  },
  iconPerfil: {
    height: 80,
    width: 80,
  },
  nomeDiv: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textGroup: {
    flex: 1,
    marginLeft: 10,
  },
  nomeBemVindo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
  },
});

const styles4 = StyleSheet.create({
  div: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    height: 330,
    borderBottomWidth: 2,
  },
  iconPerfil: {
    width: 150,
    height: 150,
  },
  nome: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  email: {
    fontSize: 13,
  },
  editView: {
    flexDirection: "row",
    alignItems: "center",
  },
  editar: {
    marginLeft: 6,
  },
});
