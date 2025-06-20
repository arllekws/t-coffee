import Cart from "../../components/Cart";
import Header from "../../components/Header";
import styles from "./styles.module.css"
import OrderResume from "../../components/Cart/OrderResume"

export default function CartPage() {
  return (
  <div>
    <Header />
    <br />

    <div className={styles.Container}>
      <div className={styles.leftSide}>
        <Cart />
      </div>
      <div>
        <OrderResume/>
      </div>
    </div>
  </div>
  );
}
