import Address from "./Address";
import PaymentComponent from "./PaymentComponent";
import OrderResume from "./OrderResume";
import styles from "./styles.module.css"

export default function DeliveryDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Address />
        <PaymentComponent />
      </div>
      <div className={styles.rightSide}>
        <OrderResume />
      </div>
    </div>
  );
}
