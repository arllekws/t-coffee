import type { AddressType } from "../contexts/OrderContext";
import { getAuth } from "firebase/auth";

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
}

export async function handlePlaceOrder(
  cartItems: CartItem[],
  paymentMethod: string,
  address: AddressType
) {
  try {
    

    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("Usuário não logado");
    

    // 1️⃣ Criar endereço
   const addressRes = await fetch("http://localhost:3000/adress", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    street: address.rua,
    city: address.cidade,
    state: address.uf,
    zipCode: address.cep,
    userId: userId
  }),
});
    const addressData = await addressRes.json();
    const addressId = addressData.id;

    // 2️⃣ Criar itens do pedido
    const orderItemsPayload = cartItems.map(item => ({
      productId: item.id,
      quantity: item.quantity,
      price: item.price,
    }));
    const orderItemsRes = await fetch("http://localhost:3000/order-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderItemsPayload),
    });
    const orderItemsData = await orderItemsRes.json();
    const orderItemId = orderItemsData.id;

    // 3️⃣ Criar pagamento
    const paymentRes = await fetch("http://localhost:3000/payment-method", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, method: paymentMethod }),
    });
    const paymentData = await paymentRes.json();
    const paymentId = paymentData.id;

    // 4️⃣ Criar pedido final
    const orderPayload = { userId, addressId, orderItemId, paymentId };
    const orderRes = await fetch("http://localhost:3000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload),
    });
    const orderData = await orderRes.json();

    alert("Pedido enviado com sucesso!");
    console.log("Pedido criado:", orderData);

    return orderData;
  } catch (err) {
    console.error("Erro ao criar pedido:", err);
    alert("Erro ao enviar pedido");
    throw err;
  }
}
