import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notificacoes = [
  {
    icon: "document-text-outline",
    title: "Inscrições do ENEM abertas",
    description: "O período de inscrição vai de 25 de abril a 12 de junho.",
    time: "Hoje",
    type: "Importante",
    unread: true,
  },
  {
    icon: "book-outline",
    title: "Aula de Biologia disponível",
    description: "Continue sua trilha com o módulo de ecologia.",
    time: "Ontem",
    type: "Curso",
    unread: true,
  },
  {
    icon: "calculator-outline",
    title: "Novas questões disponíveis",
    description: "Treine matemática com uma lista rápida de 20 questões.",
    time: "2 dias",
    type: "Prática",
    unread: false,
  },
];

export default function Bell() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Notificações</Text>
        <Text style={styles.subtitle}>Alertas importantes para sua preparação</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Ionicons name="notifications-outline" size={30} color="#025d90" />
          </View>
          <View style={styles.summaryText}>
            <Text style={styles.summaryTitle}>2 novas atualizações</Text>
            <Text style={styles.summaryDescription}>
              Veja prazos e atividades que merecem sua atenção.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recentes</Text>

        {notificacoes.map((item) => (
          <NotificationCard key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}

function NotificationCard({ icon, title, description, time, type, unread }) {
  return (
    <View style={[styles.card, unread && styles.unreadCard]}>
      <View style={styles.cardIcon}>
        <Ionicons name={icon} size={25} color="#025d90" />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.cardTop}>
          <Text style={styles.cardTitle}>{title}</Text>
          {unread ? <View style={styles.unreadDot} /> : null}
        </View>

        <Text style={styles.cardDescription}>{description}</Text>

        <View style={styles.cardFooter}>
          <Text style={styles.badge}>{type}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#dff3ff",
  },
  header: {
    backgroundColor: "white",
    paddingTop: 58,
    paddingHorizontal: 18,
    paddingBottom: 22,
    borderBottomWidth: 2,
  },
  title: {
    color: "#111",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#555",
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    padding: 14,
    paddingBottom: 24,
  },
  summaryCard: {
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  summaryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  summaryText: {
    flex: 1,
  },
  summaryTitle: {
    color: "#111",
    fontSize: 18,
    fontWeight: "bold",
  },
  summaryDescription: {
    color: "#555",
    fontSize: 14,
    marginTop: 3,
  },
  sectionTitle: {
    color: "#111",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c9dbe5",
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
  },
  unreadCard: {
    borderColor: "#025d90",
  },
  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardBody: {
    flex: 1,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    color: "#111",
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  unreadDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#ff8c00",
    marginLeft: 8,
  },
  cardDescription: {
    color: "#555",
    fontSize: 14,
    lineHeight: 19,
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  badge: {
    color: "#025d90",
    backgroundColor: "#e9f7ff",
    borderRadius: 999,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: "bold",
  },
  time: {
    color: "#777",
    fontSize: 12,
    fontWeight: "bold",
  },
});
