import { PiCoffee } from "react-icons/pi";
import { MdOutlinePlace } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import "./styles.css";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <div className="Logo">
        <PiCoffee size={30} style={{ color: "#6F4C3E", paddingBottom: "1px" }} />
        <h2>T+ Coffee</h2>
      </div>

      <div className="HeaderRight">
        <div className="location">
          <MdOutlinePlace  size={20}/>
          <p>Recife, PE</p>
        </div>
        <div className="actions">
          <button>
            <FaShoppingCart size={20}/>
            <span className="cart-count">0</span>
          </button>
          <button className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
