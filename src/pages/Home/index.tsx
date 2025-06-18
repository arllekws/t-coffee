import CardCoffee from "../../components/CardCoffee";
import Header from "../../components/Header";
import Merchandising from "../../components/Merchandising";
import styles from "./styles.module.css";
import expresso from "../../assets/coffeeImage/expresso.svg";
import americano from "../../assets/coffeeImage/americano.svg";
import expressoCremoso from "../../assets/coffeeImage/expressoCremoso.svg";
import expressoGelado from "../../assets/coffeeImage/cafeGelado.svg";
import cafeComLeite from "../../assets/coffeeImage/cafeComLeite.svg";
import latte from "../../assets/coffeeImage/latte.svg";
import capuccino from "../../assets/coffeeImage/capuccino.svg";
import macchiato from "../../assets/coffeeImage/macchiato.svg";
import mocaccino from "../../assets/coffeeImage/mochaccino.svg";
import chocolateQuente from "../../assets/coffeeImage/chocolateQuente.svg";
import cubano from "../../assets/coffeeImage/cubano.svg";
import havaiano from "../../assets/coffeeImage/havaiano.svg";
import arabe from "../../assets/coffeeImage/arabe.svg";
import irlandes from "../../assets/coffeeImage/irlandês.svg";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (description: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(description)
        ? prevFavorites.filter((fav) => fav !== description)
        : [...prevFavorites, description]
    );
  };

  const coffeeList = [
    {
      image: expresso,
      type: "Tradicional",
      description: "Expresso Tradicional",
      details:
        "O tradicional café expresso é feito com água quente e grãos de café finamente moídos.",
      price: 9.95,
    },
    {
      image: americano,
      type: "Tradicional",
      description: "Expresso Americano",
      details:
        "Expresso diluído, menos intenso que o tradicional e muito bom para dias frios. Mais pedido",
      price: 9.95,
    },
    {
      image: expressoCremoso,
      type: "Tradicional",
      description: "Expresso Cremoso",
      details:
        "Café expresso tradicional com espuma cremosa. Uma versão soft do Expresso Tradicional",
      price: 9.95,
    },
    {
      image: expressoGelado,
      type: "Gelado",
      description: "Expresso Gelado",
      details:
        "Bebida preparada com café expresso e cubos de gelo. Ideal para dias muito quentes",
      price: 9.95,
    },
    {
      image: cafeComLeite,
      type: "Tradicional",
      description: "Café com Leite",
      details:
        "Meio a meio de expresso tradicional com leite vaporizado. Básico que todos gostam.",
      price: 9.95,
    },
    {
      image: latte,
      type: "Tradicional",
      description: "Latte",
      details:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa. Mais leite. Queridinho da casa",
      price: 9.95,
    },
    {
      image: capuccino,
      type: "Tradicional",
      description: "Capuccino",
      details:
        "Bebida com canela feita de doses iguais de café, leite e espuma. Queridinho da casa.",
      price: 9.95,
    },
    {
      image: macchiato,
      type: "Tradicional",
      description: "Macchiato",
      details:
        "Café expresso misturado com um pouco de leite quente e espuma. Primo distante do capuccino",
      price: 9.95,
    },
    {
      image: mocaccino,
      type: "Tradicional",
      description: "Mocaccino",
      details: "Café expresso com calda de chocolate, pouco leite e espuma. Filho do Macchiato e Capuccino",
      price: 9.95,
    },
    {
      image: chocolateQuente,
      type: "Especial",
      description: "Chocolate Quente",
      details:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.95,
    },
    {
      image: cubano,
      type: "Especial",
      description: "Cubano",
      details:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.95,
    },
    {
      image: havaiano,
      type: "Especial",
      description: "Havaiano",
      details: "Bebida adocicada preparada com café e leite de coco",
      price: 9.95,
    },
    {
      image: arabe,
      type: "Especial",
      description: "Árabe",
      details: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.95,
    },
    {
      image: irlandes,
      type: "Alcoólico",
      description: "Irlândes",
      details: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.95,
    },
  ];

  // Gerando tipos únicos de café
  const uniqueTypes = [...new Set(coffeeList.map((coffee) => coffee.type))];

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
