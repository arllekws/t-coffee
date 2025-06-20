import { createContext, useContext, useState, type ReactNode } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../src/firebaseConfig";

type User = {
  name: string;
  email: string;
  photo: string;
};

type AuthContextType = {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      setUser({
        name: userData.displayName || "",
        email: userData.email || "",
        photo: userData.photoURL || "",
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
