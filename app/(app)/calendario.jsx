import { ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";

const eventos = [
  {
    icon: "create-outline",
    title: "Inscrições",
    description: "Período para confirmar participação no exame.",
    meta: "25 de abril a 12 de junho",
  },
  {
    icon: "calendar-outline",
    title: "Dia da prova",
    description: "Organize documentos, local de prova e horários.",
    meta: "Acompanhe o edital oficial",
  },
  {
    icon: "checkmark-done-outline",
    title: "Gabaritos",
    description: "Confira respostas preliminares e oficiais.",
    meta: "Após a aplicação",
  },
  {
    icon: "megaphone-outline",
    title: "Chamadas",
    description: "Veja etapas ligadas a SISU, FIES e PROUNI.",
    meta: "Atualize quando sair o cronograma",
  },
];

export default function Calendario() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 28, 900);

  return (
    <View style={styles.screen}>
      <PageHeader title="Calendário ENEM" subtitle="Datas importantes em um só lugar" />

      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.contentContainer, { maxWidth: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        {eventos.map((evento) => (
          <ContentCard key={evento.title} {...evento} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#dff3ff",
  },
  content: {
    flex: 1,
    padding: 14,
  },
  contentContainer: {
    alignSelf: "center",
    width: "100%",
    paddingBottom: 28,
  },
});
