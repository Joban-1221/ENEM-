import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const initialUsers = [
  {
    name: "Jovan Louzeiro",
    email: "jovan.louzeiro@gmail.com",
    password: "123456",
  },
];

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(null);

  function signIn(email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    const foundUser = users.find(
      (item) => item.email.toLowerCase() === normalizedEmail && item.password === password
    );

    if (!foundUser) {
      return {
        ok: false,
        message: "E-mail ou senha inválidos.",
      };
    }

    setUser({
      name: foundUser.name,
      email: foundUser.email,
    });

    return { ok: true };
  }

  function signUp(name, email, password) {
    const trimmedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (!trimmedName || !normalizedEmail || !password) {
      return {
        ok: false,
        message: "Preencha todos os campos.",
      };
    }

    if (password.length < 6) {
      return {
        ok: false,
        message: "A senha precisa ter pelo menos 6 caracteres.",
      };
    }

    const emailAlreadyExists = users.some(
      (item) => item.email.toLowerCase() === normalizedEmail
    );

    if (emailAlreadyExists) {
      return {
        ok: false,
        message: "Já existe uma conta com esse e-mail.",
      };
    }

    const newUser = {
      name: trimmedName,
      email: normalizedEmail,
      password,
    };

    setUsers((currentUsers) => [...currentUsers, newUser]);
    setUser({
      name: newUser.name,
      email: newUser.email,
    });

    return { ok: true };
  }

  function signOut() {
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      signIn,
      signUp,
      signOut,
    }),
    [user, users]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa ser usado dentro de AuthProvider.");
  }

  return context;
}
