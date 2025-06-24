import DeliveryDetails from "../../components/Cart/DeliveryDetails";
import Header from "../../components/Header";
import styles from "./styles.module.css"

export default function CartPage() {
  return (
  <div>
    <Header />
    
   <div className={styles.Container}>
      <div className={styles.leftSide}>
        <DeliveryDetails />
      </div>
    </div>
  </div>
  );
}
