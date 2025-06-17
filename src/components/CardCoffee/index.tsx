import styles from './styles.module.css';
import { FaShoppingCart } from "react-icons/fa";
import type { CardCoffeeProps } from '../../@types/CardCoffee.ts';


export default function CardCoffee({image, type, description, details, price}: CardCoffeeProps) {
  return (
    <div className={styles.card}>
        <img src={image} alt={type} className={styles.coffeeImage} />
        <h3 className={styles.coffeeType}>{type}</h3>
        <p className={styles.coffeeDescription}>{description}</p>
        <p className={styles.coffeeDetails}>{details}</p>
        <div className={styles.actions}>
            <span className={styles.coffeePrice}><span className={styles.rs}>R$</span>{price}</span>
            <div className={styles.quantityControls}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          <button className={styles.cartButton}>
            <FaShoppingCart />
          </button>
        </div>
    </div>
  )
}
