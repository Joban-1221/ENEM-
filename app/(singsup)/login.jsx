import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("jovan.louzeiro@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  function handleLogin() {
    const result = signIn(email, password);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setError("");
    router.replace("/");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Ionicons name="school-outline" size={42} color="#025d90" />
        </View>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Continue sua preparação para o ENEM.</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Digite seu E-mail"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Digite sua senha"
          />
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Pressable
          style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
          onPress={handleLogin}
        >
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Ainda não tem conta?</Text>
          <Link href="/register" style={styles.footerLink}>
            Criar conta
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#dff3ff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  logo: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#b7d9eb",
    marginBottom: 14,
  },
  title: {
    color: "#111",
    fontSize: 34,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#555",
    fontSize: 15,
    marginTop: 4,
    textAlign: "center",
  },
  form: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#b7d9eb",
    padding: 18,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    color: "#111",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f7fbfd",
    borderWidth: 1,
    borderColor: "#c9dbe5",
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 12,
    fontSize: 15,
  },
  error: {
    color: "#b42318",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: "#025d90",
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  pressed: {
    opacity: 0.8,
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  demoText: {
    color: "#666",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  footerText: {
    color: "#555",
  },
  footerLink: {
    color: "#025d90",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
