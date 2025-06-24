import { createContext, useContext, useState, type ReactNode } from "react";

type PaymentContextType = {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  return (
    <PaymentContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePayment() {
  const context = useContext(PaymentContext);
  if (!context) throw new Error("usePayment precisa estar dentro de PaymentProvider");
  return context;
}
