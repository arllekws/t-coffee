import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useAuth } from "./AuthContext";  // Importando o contexto de autenticação

type FavoriteContextType = {
  favorites: string[];
  toggleFavorite: (description: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();  // Pegando o usuário logado
  const [favorites, setFavorites] = useState<string[]>([]);

  // Carregar os favoritos do usuário quando ele logar
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`favorites_${user.uid}`);
      setFavorites(saved ? JSON.parse(saved) : []);
    } else {
      setFavorites([]);  // Limpa os favoritos se deslogar
    }
  }, [user]);

  // Salvar os favoritos no localStorage sempre que mudarem
  useEffect(() => {
    if (user) {
      localStorage.setItem(`favorites_${user.uid}`, JSON.stringify(favorites));
    }
  }, [favorites, user]);

  const toggleFavorite = (description: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(description)
        ? prevFavorites.filter((item) => item !== description)
        : [...prevFavorites, description]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites precisa estar dentro de FavoriteProvider");
  }
  return context;
};
