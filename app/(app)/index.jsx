import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useRouter } from "expo-router";
import { BarraSuperior1 } from "@/components/BarraSuperior";
import { ContinueStudyCard, HomeShortcut } from "@/components/MoldeOpcoes";

const shortcuts = [
  {
    icon: "timer-outline",
    title: "Simulado",
    description: "Treine com tempo e veja seu resultado.",
    route: "/questoes",
  },
  {
    icon: "albums-outline",
    title: "Questões",
    description: "Pratique por matéria e assunto.",
    route: "/questoes",
  },
  {
    icon: "calendar-outline",
    title: "Cronograma",
    description: "Datas importantes e próximos eventos.",
    route: "/calendario",
  },
  {
    icon: "school-outline",
    title: "Programas",
    description: "SISU, FIES, PROUNI e dúvidas comuns.",
    route: "/informacoes",
  },
];

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.divMaster}>
      <BarraSuperior1 />

      <ScrollView
        contentContainerStyle={styles.content}
        style={styles.divOpcoes}
        showsVerticalScrollIndicator={false}
      >
        <ContinueStudyCard onPress={() => router.push("/cursos")} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Atalhos</Text>
          <Text style={styles.sectionSubtitle}>Escolha uma ação rápida</Text>
        </View>

        <View style={styles.shortcutsGrid}>
          {shortcuts.map((shortcut) => (
            <HomeShortcut
              key={shortcut.title}
              icon={shortcut.icon}
              title={shortcut.title}
              description={shortcut.description}
              onPress={() => router.push(shortcut.route)}
            />
          ))}
        </View>
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
  },
  content: {
    padding: 14,
    paddingBottom: 24,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#111",
    fontSize: 21,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
  },
  shortcutsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
});
