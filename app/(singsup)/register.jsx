import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/imgs/enem-logo.png"

export default function Register() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {
    const result = signUp(name, email, password);

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
          <Image source={logo} style={{width: "100%", height: "100%"}}/>
        </View>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>Organize seus estudos em poucos segundos.</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Seu nome"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="seuemail@exemplo.com"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Mínimo de 6 caracteres"
          />
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Pressable
          style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
          onPress={handleRegister}
        >
          <Text style={styles.primaryButtonText}>Cadastrar</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem conta?</Text>
          <Link href="/login" style={styles.footerLink}>
            Entrar
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
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#b7d9eb",
    marginBottom: 14,
  },
  title: {
    color: "#111",
    fontSize: 32,
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
