import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../src/firebaseConfig";

type User = {
  name: string;
  email: string;
  photo: string;
  uid: string;  // Adicione o UID para conseguir relacionar os favoritos depois
};

type AuthContextType = {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          photo: firebaseUser.photoURL || "",
          uid: firebaseUser.uid, // Guarda o UID
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      setUser({
        name: userData.displayName || "",
        email: userData.email || "",
        photo: userData.photoURL || "",
        uid: userData.uid,
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
