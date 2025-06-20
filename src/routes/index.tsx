import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import { FavoriteProvider } from "../contexts/FavoriteContext";
import ProductDetailPage from "../pages/ProductDetailPage";
import { CartProvider } from "../contexts/CartContext"; // Importa o CartProvider

export default function Router() {
  return (
    <FavoriteProvider>
      <CartProvider>   {/* Agora envolve também o contexto do carrinho */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrinho" element={<Carrinho />} />
          <Route path="/product/:description" element={<ProductDetailPage />} />
        </Routes>
      </CartProvider>
    </FavoriteProvider>
  );
}
