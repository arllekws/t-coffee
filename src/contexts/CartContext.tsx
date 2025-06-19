// CartContext.tsx
import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';

type Product = {
  image: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    // Carrega do localStorage se tiver
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product: Product) {
    // Se o produto já existe, atualiza quantidade
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(p => p.description === product.description);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += product.quantity;
        return updated;
      }
      return [...prev, product];
    });
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
