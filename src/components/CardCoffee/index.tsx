import styles from './styles.module.css';
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import type { CardCoffeeProps } from '../../@types/CardCoffee.ts';
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext.tsx';
import { useFavorites } from '../../contexts/FavoriteContext';
import { Link } from "react-router-dom";

export default function CardCoffee({ image, type, description, details, price }: CardCoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(description);

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
    setQuantity((prev: number) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  }

  function handleToggleFavorite() {
    toggleFavorite(description);
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={type} className={styles.coffeeImage} />
      <h3 className={styles.coffeeType}>{type}</h3>
      <Link to={`/product/${description}`}>
        <p className={styles.coffeeDescription}>{description}</p>
      </Link>
      <p className={styles.coffeeDetails}>{details}</p>

      <div className={styles.actions}>
        <span className={styles.coffeePrice}>
          <span className={styles.rs}>R$</span>
          {price.toFixed(2).replace('.', ',')} 
        </span>

        <div className={styles.quantityControls}>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        <button className={styles.cartButton} onClick={handleAddToCart}>
          <FaShoppingCart />
        </button>

        <button
          onClick={handleToggleFavorite}
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
