import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import ProductDetailPage from "../pages/ProductDetailPage";
import OrderDone from "../pages/OrderDone";
import { FavoriteProvider } from "../contexts/FavoriteContext";
import { CartProvider } from "../contexts/CartContext";
import { AuthProvider } from "../contexts/AuthContext"; // Importa o AuthProvider
import { OrderProvider } from "../contexts/OrderContext";
import { AddressProvider } from "../contexts/AdressContext";

export default function Router() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <OrderProvider>
        <CartProvider>
           <AddressProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Carrinho" element={<Cart />} />
              <Route path="/product/:description" element={<ProductDetailPage />} />
              <Route path="/order-done" element={<OrderDone />} />
              <Route path="/Admin" element={<Admin/>} />
            </Routes>  
            </AddressProvider> 
        </CartProvider>
        </OrderProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
}
