import { useOrders } from "../../contexts/OrderContext";
import styles from "./styles.module.css";

export default function AdminPage() {
  const { orders } = useOrders();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📦 Pedidos Recebidos</h1>

      {orders.length === 0 ? (
        <p className={styles.empty}>Nenhum pedido recebido ainda.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            <h2>Pedido #{order.id}</h2>

            <div className={styles.section}>
              <strong>📍 Endereço:</strong>
              <p>
                {order.address.rua}, {order.address.numero} - {order.address.bairro} -{" "}
                {order.address.cidade}/{order.address.uf} - CEP: {order.address.cep}
              </p>
            </div>

            <div className={styles.section}>
              <strong>💳 Pagamento:</strong>
              <p>{order.paymentMethod}</p>
            </div>

            <div className={styles.section}>
              <strong>🛒 Produtos:</strong>
              <ul>
                {order.cart.map((item, index) => (
                  <li key={index}>
                    {item.description} - {item.quantity}x - R$ {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <strong>Status:</strong>
              <p>{order.status}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}