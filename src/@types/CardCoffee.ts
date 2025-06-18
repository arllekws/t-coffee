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
