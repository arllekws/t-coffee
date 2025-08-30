import { useAddress } from "../../../contexts/AdressContext";
import Address from "./Address";
import PaymentComponent from "./PaymentComponent";
import OrderResume from "./OrderResume";
import { handlePlaceOrder } from "../../../services/orderService";
import styles from "./styles.module.css";

import type { CartItem } from "../../../services/orderService";
import { usePayment } from "../../../contexts/PaymentContext";

export default function DeliveryDetails({ cartItems }: { cartItems: CartItem[] }) {
  const { address } = useAddress();
  const { paymentMethod } = usePayment();

const onSubmitOrder = () => {
  handlePlaceOrder(cartItems, paymentMethod, address);
};

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Address />
        <PaymentComponent  />
      </div>
      <div className={styles.rightSide}>
        <OrderResume  />
        <button onClick={onSubmitOrder}>Finalizar Pedido</button>
      </div>
    </div>
  );
}

