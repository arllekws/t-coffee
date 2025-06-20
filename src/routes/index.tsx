import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import ProductDetailPage from "../pages/ProductDetailPage";
import { FavoriteProvider } from "../contexts/FavoriteContext";
import { CartProvider } from "../contexts/CartContext";
import { AuthProvider } from "../contexts/AuthContext"; // Importa o AuthProvider

export default function Router() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/product/:description" element={<ProductDetailPage />} />
          </Routes>
        </CartProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
}
