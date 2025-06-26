import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
// Importa funções do React necessárias para criar contexto, estados e efeitos

import { useAuth } from "./AuthContext";  
// Importa o hook personalizado useAuth para acessar o usuário autenticado

type FavoriteContextType = {
  favorites: string[];  // Array de strings que representam descrições dos favoritos
  toggleFavorite: (description: string) => void;  // Função para adicionar/remover um favorito
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);
// Cria o contexto de favoritos com o tipo definido. Inicialmente undefined para forçar o uso dentro do provider

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  // Componente provider que engloba a aplicação ou parte dela para prover o contexto
  const { user } = useAuth();  // Pega o usuário autenticado pelo contexto de autenticação
  const [favorites, setFavorites] = useState<string[]>([]);
  // Estado local para guardar os favoritos do usuário atual

  // useEffect para carregar os favoritos do localStorage sempre que o usuário mudar (login/logout)
  useEffect(() => {
    if (user) {
      // Se usuário estiver logado, tenta carregar favoritos salvos no localStorage pela chave `favorites_${user.uid}`
      const saved = localStorage.getItem(`favorites_${user.uid}`);
      // Se encontrar algo, converte de JSON para array, senão inicializa vazio
      setFavorites(saved ? JSON.parse(saved) : []);
    } else {
      // Se não houver usuário (logout), limpa os favoritos
      setFavorites([]);
    }
  }, [user]);

  // useEffect para salvar os favoritos no localStorage sempre que os favoritos ou usuário mudarem
  useEffect(() => {
    if (user) {
      // Salva os favoritos no localStorage usando a chave que depende do id do usuário
      localStorage.setItem(`favorites_${user.uid}`, JSON.stringify(favorites));
    }
  }, [favorites, user]);

  // Função para alternar o estado de favorito de um item (adiciona se não existir, remove se existir)
  const toggleFavorite = (description: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(description)
        ? prevFavorites.filter((item) => item !== description) // Remove o favorito se já existir
        : [...prevFavorites, description] // Adiciona o favorito se não existir
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
      {/* Componente Provider disponibiliza os favoritos e função toggle para seus filhos */}
    </FavoriteContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => { // Hook customizado para consumir o contexto de favoritos
  const context = useContext(FavoriteContext);
  // Garante que o hook só será usado dentro do FavoriteProvider
  if (!context) {
    throw new Error("useFavorites precisa estar dentro de FavoriteProvider");
  }
  return context;  // Retorna o contexto com favoritos e toggleFavorite
};
