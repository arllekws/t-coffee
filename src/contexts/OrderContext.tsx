import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Product } from "./CartContext";

export type AddressType = {
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
  numero: string;
  complemento: string;
  cep: string;
};

export type Order = {
  payment: ReactNode;
  id: number;
  address: AddressType;
  paymentMethod: string;
  cart: Product[];
  status: string;
};

type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (id: number) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  function addOrder(order: Order) {
    setOrders((prev) => [...prev, order]);
  }

  const removeOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrders precisa estar dentro de OrderProvider");
  return context;
}
