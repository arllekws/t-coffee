import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';

export type Product = {
  image: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (description: string) => void;
  increaseQuantity: (description: string) => void;
  decreaseQuantity: (description: string) => void;
  clearCart: () => void; // ✅ Nova função
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product: Product) {
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

  function removeFromCart(description: string) {
    setCartItems((prev) => prev.filter(item => item.description !== description));
  }

  function increaseQuantity(description: string) {
    setCartItems((prev) =>
      prev.map(item =>
        item.description === description
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(description: string) {
    setCartItems((prev) =>
      prev.map(item =>
        item.description === description
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  }

  function clearCart() {
    setCartItems([]); // ✅ Limpa o carrinho
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart, // ✅ Expondo a função no contexto
      }}
    >
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
