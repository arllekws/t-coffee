import { createContext, useContext, useState, type ReactNode } from "react"; // Importa funções e tipos do React

// Define a estrutura do objeto de endereço
export type AddressType = {
  rua: string; /*  */
  bairro: string;
  cidade: string;
  uf: string;
  numero: string;
  complemento: string;
  cep: string;
};

// Define o tipo do contexto de endereço
type AddressContextType = {
  address: AddressType; // Estado atual do endereço
  setAddress: (address: AddressType) => void; // Função para atualizar o endereço
};

// Cria o contexto com valor inicial undefined, para forçar o uso dentro do provider
const AddressContext = createContext<AddressContextType | undefined>(undefined);

// Componente que provê o contexto para seus filhos
export function AddressProvider({ children }: { children: ReactNode }) {
  // Estado interno que armazena o endereço preenchido
  const [address, setAddress] = useState<AddressType>({
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
    numero: "",
    complemento: "",
    cep: "",
  });

 // Retorna o Provider com os valores expostos para o app
  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children} {/* Renderiza os componentes filhos dentro do provider */}
    </AddressContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAddress() { // Hook para acessar o contexto de endereço
  const context = useContext(AddressContext); // Obtém o contexto
  // Garante que o hook só seja usado dentro do Provider
  if (!context) throw new Error("useAddress precisa estar dentro de AddressProvider");
  // Retorna o contexto com address e setAddress
  return context;
}
