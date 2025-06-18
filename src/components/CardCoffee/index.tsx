import styles from './styles.module.css';
import { FaShoppingCart } from "react-icons/fa";
import type { CardCoffeeProps } from '../../@types/CardCoffee.ts';
import { useState } from 'react';


export default function CardCoffee({image, type, description, details, price}: CardCoffeeProps) {

  const [quantity, setQuantity] = useState(1);

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
            <span className={styles.coffeePrice}><span className={styles.rs}>R$</span>{price}</span>
            <div className={styles.quantityControls}>
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          <button className={styles.cartButton}>
            <FaShoppingCart />
          </button>
        </div>
    </div>
  )
}

