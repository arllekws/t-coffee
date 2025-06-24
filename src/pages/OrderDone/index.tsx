import Header from "../../components/Header";
import Ilustrator from "../../assets/Illustration.svg";
import { useOrders } from "../../contexts/OrderContext";
import styles from "./ConfirmationPage.module.css";

export default function ConfirmationPage() {
  const { orders } = useOrders();
  const lastOrder = orders[orders.length - 1];

  function getPaymentMethodLabel(method: string) {
  const paymentLabels: Record<string, string> = {
    credito: "Cartão de Crédito",
    debito: "Cartão de Débito",
    dinheiro: "Dinheiro",
  };

  return paymentLabels[method] || "Forma de pagamento não informada";
}

  return (
    <div >
      <Header />

      <div className={styles.containerTop}>

      <div className={styles.container}>
        <h1 className={styles.title}>✅ Uhuul! Pedido confirmado</h1>
        <p className={styles.subtitle}>Agora é só aguardar que logo o café chegará até você ☕</p>

        {lastOrder && (
          <>
            <div className={styles.infoSection}>
              <h2>📍 Endereço de entrega:</h2>
              <p>
                {lastOrder.address.rua}, {lastOrder.address.numero} - {lastOrder.address.bairro} -{" "}
                {lastOrder.address.cidade}/{lastOrder.address.uf} - CEP: {lastOrder.address.cep}
              </p>
            </div>

            <div className={styles.infoSection}>
              <h2>💳 Forma de pagamento:</h2>
              <p>{getPaymentMethodLabel(lastOrder.paymentMethod)}</p>
            </div>

            <div className={styles.infoSection}>
              <h2>🛒 Produtos:</h2>
              <ul className={styles.productList}>
                {lastOrder.cart.map((item, index) => (
                  <li key={index}>
                    {item.description} - {item.quantity}x - R$ {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        
      </div>
      <div className={styles.illustration}>
          <img src={Ilustrator} alt="Ilustração de confirmação" />
        </div>
    </div>
    </div>
  );
}
