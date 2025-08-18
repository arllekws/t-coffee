export interface CardCoffeeProps {
  image: string;
  type: string;
  description: string;
  details: string;
  price: number;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

// Interface que define as propriedades dos componentes que o CardCoffee recebe. (Tipagem)
