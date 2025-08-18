import CardCoffee from "../../components/CardCoffee";
import Header from "../../components/Header";
import Merchandising from "../../components/Merchandising";
import styles from "./styles.module.css";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";
import { useFavorites } from "../../contexts/FavoriteContext";
import coffeeList from "../../data/productsData";


export default function Home() {
  // Estado para o filtro de tipo selecionado (ex: "Tradicional", "Especial")
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  // Estado para mostrar ou esconder os filtros
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Estado para armazenar o termo de busca digitado
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Gera uma lista de tipos únicos com base no array de cafés
  const uniqueTypes = [...new Set(coffeeList.map((coffee) => coffee.type))];

  // Obtém os favoritos e a função para alternar favorito
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
      <div className={styles.space}>
      <Merchandising />
      </div>
      <div className={styles.containerDois}>
        <h1 className={styles.coffeeTitle}>Nossos cafés</h1>

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
          {/* Input de busca */}
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
              increaseQuantity={() => {/* função de +1 quantidade */}}
              decreaseQuantity={() => {/* função de -1 quantidade */}}
              isFavorite={favorites.includes(coffee.description)}
              onToggleFavorite={() => toggleFavorite(coffee.description)}
            />
        ))}
      </div>
    </div>
  );
}
