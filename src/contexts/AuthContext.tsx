import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../src/firebaseConfig";


// Define o tipo dos dados que o usuário logado terá
type User = {
  name: string;
  email: string;
  photo: string;
  uid: string;  // UID único do Firebase (usado para vincular dados ao usuário. Utilizado para os favoritos)
};

// Tipos de dados e funções que o contexto vai fornecer
type AuthContextType = {
  user: User | null; // Usuário logado (ou null)
  loginWithGoogle: () => Promise<void>; // Função para login
  logout: () => void; // Função para logout
};

// Cria o contexto com valor inicial undefined para forçar uso dentro do Provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente que provê o contexto para seus filhos
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Estado local para armazenar o usuário logado
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Firebase observa mudanças no estado de autenticação (login/logout)
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
         // Se houver usuário, atualiza o estado com os dados do Firebase
        setUser({
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          photo: firebaseUser.photoURL || "",
          uid: firebaseUser.uid, // Guarda o UID
        });
      } else { // Se não houver usuário, define como null
        setUser(null);
      }
    });
    // Limpa o observador quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      // Abre o popup do Google para autenticação
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      // Atualiza o estado com os dados do usuário autenticado
      setUser({
        name: userData.displayName || "",
        email: userData.email || "",
        photo: userData.photoURL || "",
        uid: userData.uid,
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error); // Trata erros de login
    }
  };

  const logout = () => {
    signOut(auth);  // Faz logout no Firebase
    setUser(null); // Limpa o estado local
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children} {/* Renderiza os componentes filhos dentro do provider */}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Garante que o hook seja usado dentro do AuthProvider
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context; // Retorna o valor do contexto (user, login, logout)
};
