import { createContext, useContext, useState, type ReactNode } from "react";

// Define o tipo do contexto de pagamento
type PaymentContextType = {
  paymentMethod: string; // Método de pagamento selecionado (ex: "Crédito", "Pix", etc.)
  setPaymentMethod: (method: string) => void;   // Função para atualizar o método de pagamento
};

// Cria o contexto com o tipo definido acima. Inicialmente `undefined` para garantir uso dentro do Provider
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Componente Provider que engloba partes da aplicação e fornece o contexto de pagamento
export function PaymentProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState<string>(""); 
  // Estado local para armazenar o método de pagamento atual, inicia como string vazia

  return (
    <PaymentContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
      {/* Torna o contexto acessível a todos os filhos do provider */}
    </PaymentContext.Provider>
  );
}

// Hook customizado para usar o contexto de pagamento facilmente nos componentes
// eslint-disable-next-line react-refresh/only-export-components
export function usePayment() {
  const context = useContext(PaymentContext);
  // Garante que o hook só será usado dentro do PaymentProvider
  if (!context) throw new Error("usePayment precisa estar dentro de PaymentProvider");
  return context;  // Retorna o contexto com método de pagamento e setter
}
