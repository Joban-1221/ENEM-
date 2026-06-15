import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


export default function AulaCard({
  index,
  numero,
  titulo,
  materia,
  cor,
  id,
}){
  const router = useRouter();
  return (
    
    <Pressable style={styles.card} 
      onPress={() => router.push({pathname: "/aula", params: {materia: materia, index: index}})}
    >
      <View style={[styles.numeroBox, { backgroundColor: cor }]}>
        <Text style={styles.numero}>{numero}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.titulo} numberOfLines={2}>
          {titulo}
        </Text>

        <View style={styles.footer}>
          <View
            style={[
              styles.materiaBadge,
              { backgroundColor: `${cor}20` },
            ]}
          >
            <Text style={[styles.materia, { color: cor }]}>
              {materia}
            </Text>
          </View>

          <Ionicons
            name="play-circle-outline"
            size={24}
            color={cor}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    elevation: 2,
  },

  numeroBox: {
    width: 54,
    height: 54,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    borderRadius: 5
  },

  numero: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  content: {
    flex: 1,
  },

  titulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  materiaBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  materia: {
    fontSize: 12,
    fontWeight: "600",
  },
});