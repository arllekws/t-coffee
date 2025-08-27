/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useOrders } from "../../contexts/OrderContext";
import { useState } from "react";
import styles from "./styles.module.css";

export default function AdminPage() {
  const { orders, removeOrder } = useOrders();

  // --- ESTADO DO FORMULÁRIO ---
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    imageUrl: "",
    details: "",
  });

  const [message, setMessage] = useState("");

  // --- FUNÇÃO PARA ENVIAR O PRODUTO ---
  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error("Erro ao criar produto");

      setMessage("Produto criado com sucesso!");
      // Limpar formulário
      setNewProduct({ name: "", description: "", type: "", price: "", imageUrl: "", details: "" });
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📦 Pedidos Recebidos</h1>

      {/* --- FORMULÁRIO DE CRIAÇÃO DE PRODUTO --- */}
      <div className={styles.createProductForm}>
        <h2>Criar Novo Produto</h2>
        <form onSubmit={handleCreateProduct}>
          <input
            type="text"
            placeholder="Nome do produto"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tipo do produto (ex: Tradicional)"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tipo (ex: Tradicional)"
            value={newProduct.type}
            onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
          />
          <input
            type="text"
            placeholder="Preço (ex: 6.90)"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL da imagem"
            value={newProduct.imageUrl}
            onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
          />
          <textarea
            placeholder="Descrição do produto"
            value={newProduct.details}
            onChange={(e) => setNewProduct({ ...newProduct, details: e.target.value })}
          />
          <button type="submit">Criar Produto</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      {/* --- LISTA DE PEDIDOS --- */}
      {orders.length === 0 ? (
        <p className={styles.empty}>Nenhum pedido recebido ainda.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            {/* ...seu código de exibição de pedidos */}
          </div>
        ))
      )}
    </div>
  );
}
