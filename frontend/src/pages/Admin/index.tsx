/* eslint-disable @typescript-eslint/no-explicit-any */
import { useOrders } from "../../contexts/OrderContext";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function AdminPage() {
  const { orders } = useOrders();

  // --- ESTADO DOS PRODUTOS ---
  const [products, setProducts] = useState<any[]>([]);

  // --- BUSCAR PRODUTOS AO MONTAR ---
  useEffect(() => {
    fetch("http://localhost:3000/products/findall")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

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

      // Atualizar lista de produtos sem precisar recarregar a página
      setProducts((prev) => [...prev, newProduct]);
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  const handleDeleteProduct = async (id: string) => {
  try {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    // Atualiza a lista removendo o deletado
    setProducts((prev) => prev.filter((p) => p.id !== id));
  } catch (err) {
    console.error("Erro ao deletar produto:", err);
  }
};

const handleUpdateProduct = async (id: string, updates: any) => {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    if (!res.ok) throw new Error("Erro ao atualizar produto");

    const updated = await res.json();

    // Atualiza no estado
    setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
  } catch (err) {
    console.error("Erro ao atualizar produto:", err);
  }
};



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📦 Administração</h1>

      {/* --- FORMULÁRIO DE CRIAÇÃO DE PRODUTO --- */}
      <div className={styles.createProductForm}>
        <h2>Criar Novo Produto</h2>
        <form onSubmit={handleCreateProduct} className={styles.form}>
          <input type="text" placeholder="Nome do produto" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
          <input type="text" placeholder="Tipo do produto" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
          <input type="text" placeholder="Preço (ex: 6.90)" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
          <input type="text" placeholder="URL da imagem" value={newProduct.imageUrl} onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })} />
          <input type="text" placeholder="Detalhes do produto" value={newProduct.details} onChange={(e) => setNewProduct({ ...newProduct, details: e.target.value })} />
          <button type="submit">Criar Produto</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      {/* --- LISTA DE PEDIDOS --- */}
      <h2>Pedidos Recebidos</h2>
      {orders.length > 0 ? (
        <p>Nenhum pedido recebido ainda.</p>
      ) : (
        orders.map((order: any) => (
          <div key={order.id} className={styles.orderCard}>
            <h3>📋 Pedido #{order.id}</h3>
            <p><strong>Cliente:</strong> {order.customerName || "Não informado"}</p>
            <p><strong>Data:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <p><strong>Status:</strong> {order.status || "Pendente"}</p>

            <h4>Itens:</h4>
            <ul>
              {order.items.map((item: any, index: number) => (
                <li key={index}>{item.quantity}x {item.name} - R$ {Number(item.price).toFixed(2)}</li>
              ))}
            </ul>

            <p><strong>Total:</strong> R$ {Number(order.total).toFixed(2)}</p>
          </div>
        ))
      )}

      {/* --- LISTA DE PRODUTOS CADASTRADOS --- */}
      <h2>Produtos cadastrados</h2>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        <ul>
      {products.map((product) => (
        <li key={product.productId}>
          <strong>{product.name}</strong> - R$ {Number(product.price).toFixed(2)}
          <div style={{ marginTop: "5px" }}>
            <button
              onClick={() =>
                handleUpdateProduct(product.productId, {
                  ...product,
                  name: prompt("Novo nome:", product.name) || product.name,
                  price: parseFloat(prompt("Novo preço:", product.price) || product.price),
                })
              }
            >
              ✏️ Editar
            </button>
            <button onClick={() => handleDeleteProduct(product.productId)}>🗑️ Deletar</button>
          </div>
        </li>
      ))}
    </ul>
          )}
    </div>
  );
}
