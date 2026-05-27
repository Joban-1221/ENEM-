import { Image, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { useRouter } from 'expo-router';

export default function BarraInferior() {
  const router = useRouter();
  return (
    <View style={styles2.div}>
      <Link href={"/config"}>
        <Image source={require("../assets/icones/sino2.png")} style={styles2.icon} />
      </Link >
      <Pressable onPress={()=> router.push('/config')}>
        <Image source={require("../assets/icones/casa.png")} style={styles2.icon} />
      </Pressable>
      <Pressable onPress={()=> router.push('/config')}>
        <Image source={require("../assets/icones/config.png")} style={styles2.icon} />
      </Pressable>
    </View>
  );
}


const styles2 = StyleSheet.create({
  div: {
    backgroundColor: "#025d90",
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingBottom: 10,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  icon: {
    height: 50,
    width: 50,
    tintColor: "white"
  }
});