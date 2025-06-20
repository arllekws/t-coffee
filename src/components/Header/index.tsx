import { MdOutlinePlace } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../../contexts/CartContext'; // Importa o contexto
import "./styles.css";
import test from "../../assets/t + COFFE escuro_Prancheta 1 1.svg"

export default function Header() {
  const { cartItems } = useCart();

  // Calcular quantidade total de itens no carrinho
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="HeaderContainer">
      <Link to="/">
        <div className="Logo">
          <img src={test} alt="" />
        </div>
      </Link>

      <div className="HeaderRight">
        <div className="location">
          <MdOutlinePlace size={20} />
          <p>Recife, PE</p>
        </div>
        <div className="actions">
          <Link to="/Carrinho">
            <button>
              <FaShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </button>
          </Link>
          <button className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
