import { MdOutlinePlace } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../../contexts/CartContext';
import "./styles.css";
import test from "../../assets/t + COFFE escuro_Prancheta 1 1.svg";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const { user, loginWithGoogle, logout} = useAuth();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="HeaderContainer">
      <Link to="/">
        <div className="Logo">
          <img src={test} alt="Logo" />
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

          {/* Botão de login/logout dinâmico */}
          {user ? (
            <div className="user-info">
              <span>{user.name ?? "Usuário"}</span>
              <button
                className="login-button"
                onClick={() => {
                  const confirmLogout = window.confirm("Deseja realmente sair da sua conta?");
                  if (confirmLogout) {
                    logout();
                  }
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button className="login-button" onClick={loginWithGoogle}>
              Login com Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
