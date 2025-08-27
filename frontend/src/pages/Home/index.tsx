/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../../components/Header";
import Merchandising from "../../components/Merchandising";
import styles from "./styles.module.css";
import { CiFilter } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useFavorites } from "../../contexts/FavoriteContext";
import CardCoffee from "../../components/CardCoffee";
import type { CardCoffeeProps } from "../../@types/CardCoffee";

export default function Home() {
  const [products, setProducts] = useState<CardCoffeeProps[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { favorites, toggleFavorite } = useFavorites();

  // Busca os produtos da API
  useEffect(() => {
    fetch("http://localhost:3000/products/findall")
      .then((res) => res.json())
      .then((data) => {
        const formatted: CardCoffeeProps[] = data.map((item: any) => ({
          productId: item.productId,
          imageUrl: item.imageUrl,
          type: item.description,
          description: item.name,
          details: item.details,
          price: parseFloat(item.price.replace(",", ".")),
          quantity: 1,
          increaseQuantity: () => {},
          decreaseQuantity: () => {},
          isFavorite: favorites.includes(item.description),
          onToggleFavorite: () => toggleFavorite(item.description),
        }));
        setProducts(formatted);
      })
      .catch((err) => console.error(err));
  }, [favorites, toggleFavorite]); // Recalcula favoritos quando mudar

  // Lista de tipos únicos para os filtros
  const uniqueTypes = [...new Set(products.map((coffee) => coffee.type))];

  // Filtra produtos por tipo e por busca
  const filteredProducts = products.filter((coffee) => {
    const matchesType = selectedFilter ? coffee.type === selectedFilter : true;
    const matchesName = coffee.description
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase());
    return matchesType && matchesName;
  });

  return (
    <div>
      <Header />
      <div className={styles.space}>
        <Merchandising />
      </div>

      <div className={styles.containerDois}>
        <h1 className={styles.coffeeTitle}>Nossos cafés</h1>

        <div
          className={styles.containerDoisPlus}
          onClick={() => setShowFilters(!showFilters)}
        >
          <CiFilter size={30} /> <p>Filtrar</p>
        </div>
      </div>

      {showFilters && (
        <div className={styles.filtersContainer}>
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          {uniqueTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={styles.filterButton}
            >
              {type}
            </button>
          ))}
          <button
            onClick={() => setSelectedFilter("")}
            className={styles.filterButton}
          >
            Limpar Filtro
          </button>
        </div>
      )}

      <br />
      <div className={styles.coffeeList}>
        {filteredProducts.map((coffee) => (
          <CardCoffee key={coffee.productId} {...coffee} />
        ))}
      </div>
    </div>
  );
}
