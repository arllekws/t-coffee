import styles from './styles.module.css';
import { FaShoppingCart } from "react-icons/fa";
import type { CardCoffeeProps } from '../../@types/CardCoffee.ts';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
// Update the path below to the correct location of your CartContext file
import { useCart } from '../../contexts/CartContext.tsx';


export default function CardCoffee({image, type, description, details, price, isFavorite, onToggleFavorite}: CardCoffeeProps) {

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      image,
      type,
      description,
      price,
      quantity
    });
  }

  function increaseQuantity() {
    setQuantity((prev:number) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1)); // Não deixa ir abaixo de 1
  }

  return (
  <div className={styles.card}>
    <img src={image} alt={type} className={styles.coffeeImage} />
    <h3 className={styles.coffeeType}>{type}</h3>
    <p className={styles.coffeeDescription}>{description}</p>
    <p className={styles.coffeeDetails}>{details}</p>

    <div className={styles.actions}>
      <span className={styles.coffeePrice}>
        <span className={styles.rs}>R$</span>
        {price}
      </span>

      <div className={styles.quantityControls}>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <button className={styles.cartButton} onClick={handleAddToCart}>
        <FaShoppingCart />
      </button>

      {/* Botão de Favorito */}
      <button
        onClick={onToggleFavorite}
        className={styles.favoriteButton}
        title="Favoritar"
      >
        {isFavorite ? (
          <FaHeart color="red" size={20} />
        ) : (
          <FaRegHeart color="gray" size={20} />
        )}
      </button>
    </div>
  </div>
);

}

