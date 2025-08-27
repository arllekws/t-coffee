export interface CardCoffeeProps {
  image: string;
  productId: string;
  imageUrl: string; // ✅ campo da imagem padronizado
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


// types/product.ts
export type Product = {
  productId: string;   // se você também quiser manter o ID
  type: string;
  description: string;
  details: string;    // opcional caso queira
  price: number;
  quantity: number;
  imageUrl: string;    // ✅ adicionado para bater com o que você passa
};

// mapeando o Product para CardCoffeeProps
export function mapProductToCardCoffee(product: Product): CardCoffeeProps {
return {
  productId: product.productId,
  imageUrl: product.imageUrl,
  type: product.type,
  description: product.description,
  details: product.details,
  price: product.price,
  quantity: 0,
  increaseQuantity: () => { }, // depois você pluga isso com o contexto
  decreaseQuantity: () => { },
  isFavorite: false,
  onToggleFavorite: () => { },
  image: String(product.imageUrl),
};
}