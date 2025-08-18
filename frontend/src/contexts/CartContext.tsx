import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';

// Define o tipo do produto que será armazenado no carrinho
export type Product = {
  image: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
};

// Define as funções e dados que o contexto irá expor
type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (description: string) => void;
  increaseQuantity: (description: string) => void;
  decreaseQuantity: (description: string) => void;
  clearCart: () => void; // ✅ Nova função
};

// Cria o contexto, inicialmente indefinido para forçar uso dentro do provider
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Estado inicial: tenta carregar do localStorage
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  // Sempre que o carrinho mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product: Product) {
    setCartItems((prev) => {
      // Verifica se o item já existe no carrinho
      const existingIndex = prev.findIndex(p => p.description === product.description);
      if (existingIndex >= 0) {
        // Se já existe, apenas soma a quantidade
        const updated = [...prev];
        updated[existingIndex].quantity += product.quantity;
        return updated;
      }
      // Se não existe, adiciona como novo item
      return [...prev, product];
    });
  }

  function removeFromCart(description: string) {
    // Remove o item cujo description for igual ao passado
    setCartItems((prev) => prev.filter(item => item.description !== description));
  }

  function increaseQuantity(description: string) {
     // Atualiza o estado cartItems incrementando a quantidade do item com a descrição passada
    setCartItems((prev) =>
      // Mapeia a lista anterior de itens do carrinho para criar uma nova lista modificada
      prev.map(item =>
        // Verifica se o item atual tem a descrição igual à passada como argumento
        item.description === description
        // Se for igual, retorna uma cópia do item com a quantidade incrementada em 1
          ? { ...item, quantity: item.quantity + 1 }
           // Se não for igual, retorna o item sem alteração
          : item
      )
    );
  }

  function decreaseQuantity(description: string) {
    // Atualiza o estado cartItems decrementando a quantidade do item com a descrição passada, mas nunca abaixo de 1
    setCartItems((prev) =>
      // Mapeia a lista anterior de itens do carrinho para criar uma nova lista modificada
      prev.map(item =>
        // Verifica se o item atual tem a descrição igual à passada como argumento
        item.description === description
         // Se for igual, retorna uma cópia do item com a quantidade decrementada em 1,
        // mas somente se a quantidade atual for maior que 1, caso contrário mantém 1
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
           // Se não for igual, retorna o item sem alteração
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
