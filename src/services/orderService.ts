import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function saveOrderToFirestore(order: Omit<OrderType, "id">) {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Pedido salvo no Firestore com ID:", docRef.id);
  } catch (error) {
    console.error("Erro ao salvar pedido no Firestore:", error);
  }
}

type OrderType = {
  id: number;
  address: unknown;
  paymentMethod: string;
  cart: unknown[];
  status: string;
  payment: unknown;
};
