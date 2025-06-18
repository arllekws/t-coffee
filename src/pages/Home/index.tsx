import CardCoffee from "../../components/CardCoffee";
import Header from "../../components/Header";
import Merchandising from "../../components/Merchandising";
import styles from "./styles.module.css";
import expresso from "../../assets/coffeeImage/expresso.svg";
import americano from "../../assets/coffeeImage/americano.svg";
import expressoCremoso from "../../assets/coffeeImage/expressoCremoso.svg"
import expressoGelado from "../../assets/coffeeImage/cafeGelado.svg"
import cafeComLeite from "../../assets/coffeeImage/cafeComLeite.svg"



export default function Home() {

  const coffeeList = [
    {
      image: expresso,
      type: "Tradicional",
      description: "Expresso Tradicional",
      details: "O tradicional café expresso é feito com água quente e grãos de café finamente moídos.",
      price: 9.95
    },
    {
      image: americano,
      type: "Tradicional",
      description: "Expresso Americano",
      details: "Expresso diluído, menos intenso que o tradicional e muito bom para dias frios.",
      price: 9.95
    },
    {
      image: expressoCremoso,
      type: "Expresso Cremoso",
      description: "Expresso Cremoso",
      details: "Café expresso tradicional com espuma cremosa. Uma versão soft do Expresso Tradicional",
      price: 9.95
    },
    {
      image: expressoGelado,
      type: "Gelado",
      description: "Expresso Gelado",
      details: "Bebida preparada com café expresso e cubos de gelo. Ideal para dias muito quentes",
      price: 9.95
    },
    {
      image: cafeComLeite,
      type: "Tradicional",
      description: "Café com Leite",
      details: "Meio a meio de expresso tradicional com leite vaporizado. Básico que todos gostam.",
      price: 9.95
    },
    
  ];
  return (
    <div>
      <Header />
      <Merchandising />
      <h1 className={styles.coffeeTitle}>Nossos cafés</h1>
      <br />
      <div className={styles.coffeeList}>
  {coffeeList.map((coffee, index) => (
    <CardCoffee
      key={index}
      image={coffee.image}
      type={coffee.type}
      description={coffee.description}
      details={coffee.details}
      price={coffee.price}
    />
  ))}
</div>
    </div>
  )
}
