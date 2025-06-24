/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

export type AddressType = {
  rua: string; /*  */
  bairro: string;
  cidade: string;
  uf: string;
  numero: string;
  complemento: string;
  cep: string;
};

type AddressContextType = {
  address: AddressType;
  setAddress: (address: AddressType) => void;
};

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export function AddressProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<AddressType>({
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
    numero: "",
    complemento: "",
    cep: "",
  });

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  const context = useContext(AddressContext);
  if (!context) throw new Error("useAddress precisa estar dentro de AddressProvider");
  return context;
}
