import expresso from "../assets/coffeeImage/expresso.svg";
import americano from "../assets/coffeeImage/americano.svg";
import expressoCremoso from "../assets/coffeeImage/expressoCremoso.svg";
import expressoGelado from "../assets/coffeeImage/cafeGelado.svg";
import cafeComLeite from "../assets/coffeeImage/cafeComLeite.svg";
import latte from "../assets/coffeeImage/latte.svg";
import capuccino from "../assets/coffeeImage/capuccino.svg";
import macchiato from "../assets/coffeeImage/macchiato.svg";
import mocaccino from "../assets/coffeeImage/mochaccino.svg";
import chocolateQuente from "../assets/coffeeImage/chocolateQuente.svg";
import cubano from "../assets/coffeeImage/cubano.svg";
import havaiano from "../assets/coffeeImage/havaiano.svg";
import arabe from "../assets/coffeeImage/arabe.svg";
import irlandes from "../assets/coffeeImage/irlandês.svg";


const coffeeList = [
  {
    image: expresso,
    type: "Tradicional",
    description: "Expresso Tradicional",
    details: "O tradicional café expresso é feito com água quente e grãos de café finamente moídos.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos"]
  },
  {
    image: americano,
    type: "Tradicional",
    description: "Expresso Americano",
    details: "Expresso diluído, menos intenso que o tradicional e muito bom para dias frios e úmidos.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos"]
  },
  {
    image: expressoCremoso,
    type: "Tradicional",
    description: "Expresso Cremoso",
    details: "Café expresso tradicional com espuma cremosa. Uma versão soft do Expresso Tradicional.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Espuma de café"]
  },
  {
    image: expressoGelado,
    type: "Gelado",
    description: "Expresso Gelado",
    details: "Bebida preparada com café expresso e cubos de gelo. Ideal para dias muito quentes.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Gelo"]
  },
  {
    image: cafeComLeite,
    type: "Tradicional",
    description: "Café com Leite",
    details: "Meio a meio de expresso tradicional com leite vaporizado. Básico que todos gostam.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Leite integral (ALERGÊNICO: Leite)"]
  },
  {
    image: latte,
    type: "Tradicional",
    description: "Latte",
    details: "Uma dose de café expresso com o dobro de leite e espuma cremosa. Mais leite. Queridinho da casa.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Leite integral (ALERGÊNICO: Leite)", "Espuma de leite"]
  },
  {
    image: capuccino,
    type: "Tradicional",
    description: "Capuccino",
    details: "Bebida com canela feita de doses iguais de café, leite e espuma. Queridinho da casa.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Leite integral (ALERGÊNICO: Leite)", "Canela"]
  },
  {
    image: macchiato,
    type: "Tradicional",
    description: "Macchiato",
    details: "Café expresso misturado com um pouco de leite quente e espuma. Primo distante do capuccino.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Leite integral vaporizado (ALERGÊNICO: Leite)", "Espuma de leite"]
  },
  {
    image: mocaccino,
    type: "Tradicional",
    description: "Mocaccino",
    details: "Café expresso com calda de chocolate, pouco leite e espuma. Filho do Macchiato e Capuccino.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Leite integral (ALERGÊNICO: Leite)", "Calda de chocolate (ALERGÊNICO: Cacau, pode conter traços de leite e soja)", "Espuma de leite"]
  },
  {
    image: chocolateQuente,
    type: "Especial",
    description: "Chocolate Quente",
    details: "Bebida feita com chocolate dissolvido no leite quente e café.",
    price: 9.95,
    ingredients: ["Leite integral (ALERGÊNICO: Leite)", "Chocolate em pó (ALERGÊNICO: Cacau, pode conter traços de leite e soja)", "Água", "Grãos de café arábica moídos"]
  },
  {
    image: cubano,
    type: "Especial",
    description: "Cubano",
    details: "Drink gelado de café expresso com rum, creme de leite e hortelã.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Rum (ALERGÊNICO: Álcool)", "Creme de leite fresco (ALERGÊNICO: Leite)", "Hortelã"]
  },
  {
    image: havaiano,
    type: "Especial",
    description: "Havaiano",
    details: "Bebida adocicada preparada com café e leite de coco.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Leite de coco (ALERGÊNICO: Coco)", "Açúcar"]
  },
  {
    image: arabe,
    type: "Especial",
    description: "Árabe",
    details: "Bebida preparada com grãos de café árabe e especiarias.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Cardamomo", "Outras especiarias (pode conter traços de nozes)"]
  },
  {
    image: irlandes,
    type: "Alcoólico",
    description: "Irlândes",
    details: "Bebida a base de café, uísque irlandês, açúcar e chantilly.",
    price: 9.95,
    ingredients: ["Água", "Grãos de café arábica moídos", "Uísque irlandês (ALERGÊNICO: Álcool)", "Açúcar", "Chantilly (ALERGÊNICO: Leite)"]
  }
];



  export default coffeeList;