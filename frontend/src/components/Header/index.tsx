import { MdOutlinePlace } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../../contexts/CartContext';
import "./styles.css";
import test from "../../assets/Logoo.svg";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {

  // chama o usuário e as funções de login/logout do contexto de autenticação
  const { user, loginWithGoogle, logout} = useAuth();
  // chama os itens do carrinho do contexto de carrinho
  const { cartItems } = useCart();

  // Calcula o total de itens no carrinho somando as quantidades de cada item
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="HeaderContainer">
      <Link to="/"> {/* Link que redireciona para a página inicial */}
        <div className="Logo">
          <img src={test} alt="Logo" /> {/* Imagem da logo */}
        </div>
      </Link>

      <div className="HeaderRight">
        <div className="location"> {/* Seção para mostrar a localização */}
          <MdOutlinePlace size={20} />
          <p>Recife, PE</p>
        </div>
        <div className="actions"> {/* Ações do usuário (carrinho, login, etc) */}
          <Link to="/Carrinho"> {/* Link para a página do carrinho */}
            <button> {/* Botão que contém o ícone e a contagem do carrinho */}
              <FaShoppingCart size={20} />
              {/* Se houver itens no carrinho, mostra a quantidade */}
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </button>
          </Link>

          {/* Botão de login/logout dinâmico */}
          {user ? ( // Se o usuário estiver logado...
            <div className="user-info">
              <span>{user.name ?? "Usuário"}</span> {/* Nome do usuário ou "Usuário" se não tiver nome */}
              <button
                className="login-button"
                onClick={() => {
                  // Pergunta ao usuário se deseja mesmo sair
                  const confirmLogout = window.confirm("Deseja realmente sair da sua conta?");
                  if (confirmLogout) {
                    logout(); // Faz logout se o usuário confirmar
                  }
                }}
              >
                Logout
              </button>
            </div>
          ) : ( // Se o usuário não estiver logado...
            <button className="login-button" onClick={loginWithGoogle}>
              Login com Google {/* Botão para login via Google */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
