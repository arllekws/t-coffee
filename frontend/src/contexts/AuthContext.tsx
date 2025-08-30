/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../../src/firebaseConfig";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

// Tipo do usuário
type User = {
  name: string;
  email: string;
  photo: string;
  uid: string;     // UID do Firebase
  userId: string;  // ID do banco relacional
};

// Contexto
type AuthContextType = {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Função que garante o usuário no banco
const ensureUserInDatabase = async (firebaseUser: any): Promise<string> => {
  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
      }),
    });

    const data = await response.json();
    return data.userId; // retorna o ID do banco
  } catch (err) {
    console.error("Erro ao criar/verificar usuário:", err);
    return "";
  }
};

// Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Login com Google
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Firebase user:", result.user);
      const userData = result.user;

      const userId = await ensureUserInDatabase(userData);

      setUser({
        name: userData.displayName || "",
        email: userData.email || "",
        photo: userData.photoURL || "",
        uid: userData.uid,
        userId,
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Detecta se já existe um usuário logado (reload/persistência)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userId = await ensureUserInDatabase(firebaseUser);

        setUser({
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          photo: firebaseUser.photoURL || "",
          uid: firebaseUser.uid,
          userId,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar em qualquer componente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
