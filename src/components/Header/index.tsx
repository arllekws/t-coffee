import { PiCoffee } from "react-icons/pi";
import { MdOutlinePlace } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <Link to="/">
        <div className="Logo">
          <PiCoffee size={30} style={{ color: "#6F4C3E", paddingBottom: "1px" }} />
          <h1>T+Coffee</h1>
        </div>
      </Link>

      <div className="HeaderRight">
        <div className="location">
          <MdOutlinePlace  size={20}/>
          <p>Recife, PE</p>
        </div>
        <div className="actions">
          <Link to="/Carrinho">
            <button>
              <FaShoppingCart size={20}/>
              <span className="cart-count">0</span>
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
