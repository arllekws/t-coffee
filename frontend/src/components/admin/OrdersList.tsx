import { useEffect, useState } from "react";

type Order = {
  id: string;
  userId: string;
  total: number;
  status: string;
  createdAt: string;
  items: { productId: string; name: string; quantity: number; price: number }[];
};

export default function OrdersList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="space-y-6">
      {orders.length === 0 && <p>Nenhum pedido ainda.</p>}

      {orders.map((order) => (
        <div key={order.id} className="border p-4 rounded-lg shadow">
          <p><strong>ID:</strong> {order.id}</p>
          <p><strong>Cliente:</strong> {order.userId}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> R${order.total.toFixed(2)}</p>
          <p><strong>Data:</strong> {new Date(order.createdAt).toLocaleString()}</p>

          <h4 className="mt-2 font-semibold">Itens:</h4>
          <ul className="list-disc pl-6">
            {order.items.map((item, idx) => (
              <li key={idx}>
                {item.name} — {item.quantity}x (R${item.price.toFixed(2)})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
