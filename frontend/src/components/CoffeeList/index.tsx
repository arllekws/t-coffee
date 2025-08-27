/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { CardCoffeeProps } from '../../@types/CardCoffee.ts';
import CardCoffee from "../CardCoffee/index.tsx";

export default function CoffeeList() {
  const [products, setProducts] = useState<CardCoffeeProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/findall") // URL da sua API
      .then(res => res.json())
      .then(data => {
        // Transformar os dados da API no formato que o CardCoffee espera
        const formatted = data.map((item: any) => ({
          productId: item.productId,
          image: item.imageUrl,
          type: item.description,
          description: item.name,
          details: item.details, // você pode adaptar
          price: parseFloat(item.price.replace(",", ".")) // transforma "6,90" em 6.90
        }));
        setProducts(formatted);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map(product => (
        <CardCoffee
              key={product.productId}
              imageUrl={product.image}
              type={product.type}
              description={product.description}
              details={product.details}
              price={product.price}
              quantity={0}
              increaseQuantity={function (): void {
                  throw new Error("Function not implemented.");
              } }
              decreaseQuantity={function (): void {
                  throw new Error("Function not implemented.");
              } }
              isFavorite={false}
              onToggleFavorite={function (): void {
                  throw new Error("Function not implemented.");
              } }
              productId={product.productId} image={""} />
      ))}
    </div>
  );
}
