import React, { useState } from "react";
import { Image, Pressable, ScrollView, Switch, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

const preferencias = [
  {
    icon: "calendar-outline",
    title: "Calendário",
    description: "Datas de provas, gabaritos e chamadas.",
  },
  {
    icon: "volume-medium-outline",
    title: "Sons do app",
    description: "Volume de aulas e atividades.",
  },
  {
    icon: "color-palette-outline",
    title: "Aparência",
    description: "Tema claro e tamanho dos textos.",
  },
];

const conta = [
  {
    icon: "person-outline",
    title: "Dados pessoais",
    description: "Nome, e-mail e informações da conta.",
  },
  {
    icon: "shield-checkmark-outline",
    title: "Privacidade",
    description: "Preferências de segurança e uso de dados.",
  },
];

export default function BasicScreen() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  function handleSignOut() {
    signOut();
    router.replace("/login");
  }

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <Image source={require("../../assets/icones/user.png")} style={styles.avatar} />
          <Text style={styles.name}>{user?.name || "Estudante"}</Text>
          <Text style={styles.email}>{user?.email || "email@exemplo.com"}</Text>

          <Pressable style={styles.editButton}>
            <Ionicons name="create-outline" size={20} color="#025d90" />
            <Text style={styles.editButtonText}>Editar perfil</Text>
          </Pressable>
        </View>

        <View style={styles.content}>
          <View style={styles.notificationPanel}>
            <View style={styles.notificationText}>
              <Text style={styles.panelTitle}>Notificações</Text>
              <Text style={styles.panelDescription}>Receber alertas de estudos e prazos.</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#c9dbe5", true: "#9bd1ee" }}
              thumbColor={notificationsEnabled ? "#025d90" : "#f4f4f4"}
            />
          </View>

          <SettingsSection title="Preferências">
            {preferencias.map((item) => (
              <SettingsRow key={item.title} {...item} />
            ))}
          </SettingsSection>

          <SettingsSection title="Conta">
            {conta.map((item) => (
              <SettingsRow key={item.title} {...item} />
            ))}
          </SettingsSection>

          <Pressable
            style={({ pressed }) => [styles.signOutButton, pressed && styles.pressed]}
            onPress={handleSignOut}
          >
            <Ionicons name="log-out-outline" size={22} color="#b42318" />
            <Text style={styles.signOutText}>Sair da conta</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

function SettingsSection({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCard}>{children}</View>
    </View>
  );
}

function SettingsRow({ icon, title, description }) {
  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.rowIcon}>
        <Ionicons name={icon} size={23} color="#025d90" />
      </View>

      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowDescription}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#7b8c95" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#dff3ff",
  },
  profileHeader: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 54,
    paddingHorizontal: 18,
    paddingBottom: 24,
    borderBottomWidth: 2,
  },
  avatar: {
    width: 118,
    height: 118,
    marginBottom: 8,
  },
  name: {
    color: "#111",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  email: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9f7ff",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: 14,
  },
  editButtonText: {
    color: "#025d90",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 6,
  },
  content: {
    padding: 14,
    paddingBottom: 24,
  },
  notificationPanel: {
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  notificationText: {
    flex: 1,
    marginRight: 12,
  },
  panelTitle: {
    color: "#111",
    fontSize: 18,
    fontWeight: "bold",
  },
  panelDescription: {
    color: "#555",
    fontSize: 14,
    marginTop: 3,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    color: "#111",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionCard: {
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#edf3f6",
  },
  pressed: {
    opacity: 0.75,
  },
  rowIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#e9f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rowText: {
    flex: 1,
  },
  rowTitle: {
    color: "#111",
    fontSize: 16,
    fontWeight: "bold",
  },
  rowDescription: {
    color: "#555",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  signOutButton: {
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f3c4bd",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signOutText: {
    color: "#b42318",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
