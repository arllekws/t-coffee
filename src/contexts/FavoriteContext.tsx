import { createContext, useContext, useState, type ReactNode, useEffect } from "react";

type FavoriteContextType = {
  favorites: string[];
  toggleFavorite: (description: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    // Carregar favoritos do localStorage (se houver)
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Salvar no localStorage sempre que os favoritos mudarem
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (description: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(description)) {
        return prevFavorites.filter((item) => item !== description);
      } else {
        return [...prevFavorites, description];
      }
    });
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
