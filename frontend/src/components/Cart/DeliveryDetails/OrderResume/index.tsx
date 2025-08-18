import styles from "./styles.module.css"
import { useCart } from '../../../../contexts/CartContext';
import { useOrders} from "../../../../contexts/OrderContext";
import { Link } from "react-router-dom";
import { useAddress } from "../../../../contexts/AdressContext";
import { usePayment } from "../../../../contexts/PaymentContext";

export default function OrderResume() {
  // Carrinho: itens e funções para alterar/remover/limpar/diminuir e aumentar
  const { cartItems, decreaseQuantity, increaseQuantity, removeFromCart, clearCart } = useCart();
   // Função para adicionar pedido
  const { addOrder } = useOrders();
  // Endereço preenchido pelo usuário
  const { address } = useAddress();
  // Método de pagamento escolhido
  const { paymentMethod } = usePayment();

  //Função de confirmação de pedido
  const handleConfirm = () => {
    const newOrder = {
      id: Date.now(), // gera um ID único
      address,
      paymentMethod,
      cart: cartItems,
      status: "Pendente",
      payment: null, // pode ser ajustado depois, por isso recebe null
    };

    addOrder(newOrder); // salva o pedido
    clearCart(); // esvazia o carrinho
    alert("Pedido enviado a Cafeteria!");
  };

  //Calculo do valor total do carrinho
  const totalPedido = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className={styles.rightSide}>
      {/* Caso o carrinho esteja vazio */}
      {cartItems.length === 0 && <p>Seu carrinho está vazio</p>}

      {/* Lista de itens no carrinho */}
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

           {/* Botões para aumentar, diminuir e remover */}
          <div className={styles.containerActions}>
            <div className={styles.actionsCounter}>
              <button onClick={() => decreaseQuantity(item.description)}>-</button>
              <button onClick={() => increaseQuantity(item.description)}>+</button>
            </div>
            <div className={styles.actionsRemove}>
              <button onClick={() => removeFromCart(item.description)}>Remover</button>
            </div>
          </div>

          {/* Total do item */}
          <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
          <hr />
        </div>
      ))}

      {/* Total geral do pedido */}
      <p className={styles.totalPedido}>Total Pedido: R$ {totalPedido.toFixed(2)}</p>

       {/* Botão de confirmação do pedido, Link para a pagina de pedido confirmado */}
      <div className={styles.orderDone}>
        <Link to="/order-done">
          <button
           className={styles.confirmButton} 
           onClick={handleConfirm} 
           disabled={cartItems.length === 0 || !address || !paymentMethod}> {/**  só habilita se tudo estiver preenchido */}
            CONFIRMAR PEDIDO
            </button>
        </Link>
    </div>
    </div>
  );
}
