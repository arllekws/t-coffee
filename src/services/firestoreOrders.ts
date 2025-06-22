import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import type { Order } from "../contexts/OrderContext";

export async function saveOrderToFirestore(order: Order) {
  try {
    await addDoc(collection(db, "orders"), order);
    console.log("Pedido salvo no Firestore!");
  } catch (error) {
    console.error("Erro ao salvar pedido:", error);
  }
}
