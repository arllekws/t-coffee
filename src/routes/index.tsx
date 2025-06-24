import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import ProductDetailPage from "../pages/ProductDetailPage";
import OrderDone from "../pages/OrderDone";
import Error from "../pages/Error"
import { FavoriteProvider } from "../contexts/FavoriteContext";
import { CartProvider } from "../contexts/CartContext";
import { AuthProvider } from "../contexts/AuthContext"; // Importa o AuthProvider
import { OrderProvider } from "../contexts/OrderContext";
import { AddressProvider } from "../contexts/AdressContext";

import ScrollToTop from "./ScrollToTop";
import { PaymentProvider } from "../contexts/PaymentContext";

export default function Router() {
  return (
    <>
      <ScrollToTop/>
      <AuthProvider>
        <FavoriteProvider>
          <OrderProvider>
            <PaymentProvider>
              <CartProvider>
                <AddressProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Carrinho" element={<Cart />} />
                    <Route path="/product/:description" element={<ProductDetailPage />} />
                    <Route path="/order-done" element={<OrderDone />} />
                    <Route path="/Admin" element={<Admin/>} />
                    <Route path="*" element={<Error/>} />
                  </Routes>  
                </AddressProvider> 
              </CartProvider>
            </PaymentProvider>
          </OrderProvider>
        </FavoriteProvider>
      </AuthProvider>
    </>
  );
}
