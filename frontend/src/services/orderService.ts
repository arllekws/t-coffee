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
    // Pegar o usuário logado pelo Firebase
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
        zipCode: address.cep
      }),
    });
    const addressData = await addressRes.json();
    const addressId = addressData.id;

    // 2️⃣ Criar itens do pedido individualmente
    const orderItemIds: string[] = [];
    for (const item of cartItems) {
      const orderItemRes = await fetch("http://localhost:3000/order-items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        }),
      });

      const orderItemData = await orderItemRes.json();
      orderItemIds.push(orderItemData.id);
    }

    // 3️⃣ Criar pagamento
    const paymentRes = await fetch("http://localhost:3000/payment-method", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, methodName: paymentMethod }),
    });
    const paymentData = await paymentRes.json();
    const paymentId = paymentData.id;

    // 4️⃣ Criar pedido final
    const orderPayload = {
      userId,
      addressId,
      orderItemIds, // array de itens agora
      paymentId,
    };

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
