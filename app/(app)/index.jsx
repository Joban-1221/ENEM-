import { StyleSheet, View, ScrollView, Text, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
import { BarraSuperior1 } from "@/components/BarraSuperior";
import { ContinueStudyCard, HomeShortcut } from "@/components/MoldeOpcoes";

const shortcuts = [
  {
    icon: "timer-outline",
    title: "Simulado",
    description: "Treine com tempo e veja seu resultado.",
    route: "/simulado",
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
    route: "/cronograma",
  },
  {
    icon: "school-outline",
    title: "Programas",
    description: "SISU, FIES, PROUNI e dúvidas comuns.",
    route: "/programas",
  },
];

export default function App() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isCompact = width < 380;
  const contentWidth = Math.min(width - 28, 900);

  return (
    <View style={styles.divMaster}>
      <BarraSuperior1 />

      <ScrollView
        style={styles.divOpcoes}
        contentContainerStyle={[styles.content, { maxWidth: contentWidth }]}
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
              style={isCompact ? styles.shortcutFull : styles.shortcutDefault}
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
    alignSelf: "center",
    width: "100%",
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
    columnGap: 12,
    rowGap: 12,
  },
  shortcutDefault: {
    flexBasis: "48%",
  },
  shortcutFull: {
    flexBasis: "100%",
  },
});
