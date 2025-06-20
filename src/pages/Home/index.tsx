import CardCoffee from "../../components/CardCoffee";
import Header from "../../components/Header";
import Merchandising from "../../components/Merchandising";
import styles from "./styles.module.css";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";
import { useFavorites } from "../../contexts/FavoriteContext";
import coffeeList from "../../data/productsData";


export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Gerando tipos únicos de café
  const uniqueTypes = [...new Set(coffeeList.map((coffee) => coffee.type))];

  const { favorites, toggleFavorite } = useFavorites();

  // Filtrando a lista de cafés por tipo e por nome (descrição)
  const filteredCoffeeList = coffeeList.filter((coffee) => {
    const matchesType = selectedFilter ? coffee.type === selectedFilter : true;
    const matchesName = coffee.description
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase());
    return matchesType && matchesName;
  });

  return (
    <div>
      <Header />
      <Merchandising />
      <div className={styles.containerDois}>
        <h1 className={styles.coffeeTitle}>Nossos cafés</h1>

        {/* Input de busca */}
        

        {/* Botão de abrir filtros */}
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

      {/* Lista de Cafés */}
      <div className={styles.coffeeList}>
        {filteredCoffeeList.map((coffee, index) => (
          <CardCoffee
              key={index}
              image={coffee.image}
              type={coffee.type}
              description={coffee.description}
              details={coffee.details}
              price={coffee.price}
              quantity={1} 
              increaseQuantity={() => {/* sua função de +1 quantidade */}}
              decreaseQuantity={() => {/* sua função de -1 quantidade */}}
              isFavorite={favorites.includes(coffee.description)}
              onToggleFavorite={() => toggleFavorite(coffee.description)}
            />
        ))}
      </div>
    </div>
  );
}
