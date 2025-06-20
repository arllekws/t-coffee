import styles from "./styles.module.css"

import { useCart } from '../../../contexts/CartContext';
import { useOrders} from "../../../contexts/OrderContext";
import type { AddressType } from "../../../contexts/OrderContext";
import { Link } from "react-router-dom";



export default function OrderResume() {
  const { cartItems, decreaseQuantity, increaseQuantity, removeFromCart, clearCart } = useCart();
  const { addOrder } = useOrders();

  const address: AddressType = {
    rua: "Exemplo Rua",
    bairro: "Exemplo Bairro",
    cidade: "Exemplo Cidade",
    uf: "SP",
    numero: "123",
    complemento: "Apto 101",
    cep: "00000000",
  };

  const paymentMethod = "Cartão de Crédito";

  const handleConfirm = () => {
    const newOrder = {
      id: Date.now(),
      address,
      paymentMethod,
      cart: cartItems,
      status: "Pendente",
    };

    addOrder(newOrder);
    clearCart();
    alert("Pedido enviado a Cafeteria!");
  };

  const totalPedido = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className={styles.rightSide}>
      {cartItems.length === 0 && <p>Seu carrinho está vazio</p>}
      {cartItems.map(item => (
        <div key={item.description} className={styles.description}>
          <div className={styles.OrderItem}>
            <img src={item.image} alt={item.type} width={100} />
            <div className={styles.typeandname}>
              <div className={styles.seila}>
                <p>{item.description}</p>
                <p>Preço: R$ {item.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <p>Quantidade: {item.quantity}</p>

          <button onClick={() => decreaseQuantity(item.description)}>-</button>
          <button onClick={() => increaseQuantity(item.description)}>+</button>
          <button onClick={() => removeFromCart(item.description)}>Remover</button>
          
          <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
          <hr />
        </div>
      ))}
      <p className={styles.totalPedido}>Total Pedido: R$ {totalPedido.toFixed(2)}</p>
      <Link to="/order-done">
        <button className={styles.confirmButton} onClick={handleConfirm}>CONFIRMAR PEDIDO</button>
      </Link>
    </div>
  );
}
