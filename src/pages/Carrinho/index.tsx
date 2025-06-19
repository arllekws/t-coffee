import Cart from "../../components/Cart";
import { useCart } from '../../contexts/CartContext';
import Header from "../../components/Header";

export default function CartPage() {
  const { cartItems } = useCart();
  return (
  <div>
    <Header />
    <Cart />

    <div>
      {cartItems.length === 0 && <p>Seu carrinho está vazio</p>}
      {cartItems.map(item => (
        <div key={item.description}>
          <img src={item.image} alt={item.type} width={100} />
          <p>{item.description}</p>
          <p>Quantidade: {item.quantity}</p>
          <p>Preço: R$ {item.price}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
