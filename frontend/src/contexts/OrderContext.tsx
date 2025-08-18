import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
// Importa funções do React para criar contexto, estado, efeito e para tipar ReactNode

import type { Product } from "./CartContext";
// Importa o tipo Product do contexto de carrinho para usar na tipagem dos pedidos

// Define o tipo do endereço usado no pedido
export type AddressType = {
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
  numero: string;
  complemento: string;
  cep: string;
};

// Define o tipo do pedido (Order)
export type Order = {
  payment: ReactNode;        // Componente React que representa a forma de pagamento
  id: number;                // Identificador único do pedido
  address: AddressType;      // Endereço de entrega do pedido
  paymentMethod: string;     // Método de pagamento (ex: cartão, boleto)
  cart: Product[];           // Lista de produtos no pedido
  status: string;            // Status atual do pedido (ex: "pendente", "enviado")
};

// Define o tipo do contexto de pedidos
type OrderContextType = {
  orders: Order[];                // Lista de pedidos
  addOrder: (order: Order) => void;    // Função para adicionar um pedido
  removeOrder: (id: number) => void;   // Função para remover um pedido pelo id
};

// Cria o contexto para pedidos, inicialmente undefined para garantir que só seja usado dentro do provider
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Componente Provider que disponibiliza o contexto de pedidos para os filhos
export function OrderProvider({ children }: { children: ReactNode }) {
  // Inicializa o estado 'orders' com os pedidos salvos no localStorage, se existirem
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Efeito que salva os pedidos no localStorage sempre que o estado 'orders' muda
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Função para adicionar um novo pedido ao estado
  function addOrder(order: Order) {
    setOrders((prev) => [...prev, order]);
  }

  // Função para remover um pedido pelo seu id
  const removeOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    // Provider disponibiliza o estado e as funções do contexto para seus componentes filhos
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export function useOrders() { // Hook customizado para consumir o contexto de pedidos de forma mais prática
  const context = useContext(OrderContext);
  // Garante que o hook só seja usado dentro do OrderProvider
  if (!context) throw new Error("useOrders precisa estar dentro de OrderProvider");
  return context;  // Retorna o contexto com pedidos e funções para manipular
}
