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



// Dados dos cafés
const coffeeList = [
  {
    image: expresso,
    type: "Tradicional",
    description: "Expresso Tradicional",
    details: "O tradicional café expresso é feito com água quente e grãos de café finamente moídos.",
    price: 6.90,
    ingredients: [
      "30ml de água filtrada a 90°C",
      "7g de grãos de café Arábica moídos na hora (torra média)",
      "Açúcar cristal opcional (à parte)"
    ]
  },
  {
    image: americano,
    type: "Tradicional",
    description: "Expresso Americano",
    details: "Expresso diluído, menos intenso que o tradicional e muito bom para dias frios e úmidos.",
    price: 7.50,
    ingredients: [
      "30ml de café expresso (7g de grãos Arábica)",
      "70ml de água quente (90°C) adicionada após a extração",
      "Opção de adoçar com mel orgânico"
    ]
  },
  {
    image: expressoCremoso,
    type: "Tradicional",
    description: "Expresso Cremoso",
    details: "Café expresso tradicional com espuma cremosa. Uma versão soft do Expresso Tradicional.",
    price: 8.90,
    ingredients: [
      "30ml de café expresso (7g de grãos Arábica torra clara)",
      "15ml de creme de café batido (feito com nata 35% de gordura)",
      "Canela em pó para finalizar"
    ]
  },
  {
    image: expressoGelado,
    type: "Gelado",
    description: "Expresso Gelado",
    details: "Bebida preparada com café expresso e cubos de gelo. Ideal para dias muito quentes.",
    price: 9.90,
    ingredients: [
      "50ml de café expresso duplo (14g de grãos)",
      "5 cubos de gelo de café (café congelado para não diluir)",
      "10ml de xarope de baunilha opcional"
    ]
  },
  {
    image: cafeComLeite,
    type: "Tradicional",
    description: "Café com Leite",
    details: "Meio a meio de expresso tradicional com leite vaporizado. Básico que todos gostam.",
    price: 8.50,
    ingredients: [
      "30ml de café expresso",
      "70ml de leite integral vaporizado (60°C) (ALERGÊNICO: Leite)",
      "Espuma de leite cremosa (2cm)"
    ]
  },
  {
    image: latte,
    type: "Tradicional",
    description: "Latte",
    details: "Uma dose de café expresso com o dobro de leite e espuma cremosa. Mais leite. Queridinho da casa.",
    price: 12.50,
    ingredients: [
      "30ml de café expresso (grãos Arábica torra média)",
      "150ml de leite integral vaporizado (ALERGÊNICO: Leite)",
      "20ml de espuma de leite micro (textura sedosa)",
      "Arte latte com chocolate em pó 70%"
    ]
  },
  {
    image: capuccino,
    type: "Tradicional",
    description: "Capuccino",
    details: "Bebida com canela feita de doses iguais de café, leite e espuma. Queridinho da casa.",
    price: 13.50,
    ingredients: [
      "30ml de café expresso",
      "30ml de leite vaporizado (ALERGÊNICO: Leite)",
      "30ml de espuma de leite densa",
      "2g de canela do Ceilão em pó",
      "Raspas de chocolate meio amargo"
    ]
  },
  {
    image: macchiato,
    type: "Tradicional",
    description: "Macchiato",
    details: "Café expresso misturado com um pouco de leite quente e espuma. Primo distante do capuccino.",
    price: 10.90,
    ingredients: [
      "30ml de café expresso intenso (torra escura)",
      "15ml de leite integral vaporizado (ALERGÊNICO: Leite)",
      "5ml de espuma de leite",
      "Caramelo salado opcional (5ml)"
    ]
  },
  {
    image: mocaccino,
    type: "Tradicional",
    description: "Mocaccino",
    details: "Café expresso com calda de chocolate, pouco leite e espuma. Filho do Macchiato e Capuccino.",
    price: 15.90,
    ingredients: [
      "30ml de café expresso",
      "20ml de calda de chocolate belga (ALERGÊNICO: Cacau, leite, soja)",
      "50ml de leite vaporizado (ALERGÊNICO: Leite)",
      "Espuma de leite aromatizada com baunilha",
      "Chocolate granulado para decorar"
    ]
  },
  {
    image: chocolateQuente,
    type: "Especial",
    description: "Chocolate Quente",
    details: "Bebida feita com chocolate dissolvido no leite quente e café.",
    price: 14.90,
    ingredients: [
      "100ml de leite integral (ALERGÊNICO: Leite)",
      "30g de chocolate 70% cacau derretido (ALERGÊNICO: Cacau, leite)",
      "15ml de café expresso concentrado",
      "Nata montada (20ml) (ALERGÊNICO: Leite)",
      "Pau de canela para aromatizar"
    ]
  },
  {
    image: cubano,
    type: "Especial",
    description: "Cubano",
    details: "Drink gelado de café expresso com rum, creme de leite e hortelã.",
    price: 18.90,
    ingredients: [
      "50ml de café expresso forte (torra escura)",
      "30ml de rum Havana Club 3 anos (ALERGÊNICO: Álcool)",
      "20ml de creme de leite fresco (ALERGÊNICO: Leite)",
      "5 folhas de hortelã fresca",
      "Xarope de demerara (10ml)",
      "Gelo picado especial para drinks"
    ]
  },
  {
    image: havaiano,
    type: "Especial",
    description: "Havaiano",
    details: "Bebida adocicada preparada com café e leite de coco.",
    price: 16.90,
    ingredients: [
      "50ml de café coado suave (grãos Kona)",
      "100ml de leite de coco orgânico (ALERGÊNICO: Coco)",
      "15ml de xarope de coco artesanal",
      "Raspas de coco tostado para decorar",
      "Gelo em cubos de água de coco"
    ]
  },
  {
    image: arabe,
    type: "Especial",
    description: "Árabe",
    details: "Bebida preparada com grãos de café árabe e especiarias.",
    price: 17.90,
    ingredients: [
      "10g de café Arábica moído na hora (torra clara)",
      "120ml de água mineral a 85°C",
      "2 cápsulas de cardamomo verde esmagado",
      "1 cravo-da-índia",
      "Pitada de canela em pó (opcional)",
      "Açúcar mascavo à parte"
    ]
  },
  {
    image: irlandes,
    type: "Alcoólico",
    description: "Irlândes",
    details: "Bebida a base de café, uísque irlandês, açúcar e chantilly.",
    price: 22.90,
    ingredients: [
      "50ml de café expresso forte",
      "30ml de uísque Jameson (ALERGÊNICO: Álcool)",
      "10ml de xarope de açúcar queimado",
      "30ml de chantilly fresco (ALERGÊNICO: Leite)",
      "Cacau em pó 100% para finalizar",
      "Gelo seco para apresentação (não consumir)"
    ]
  }
];


  export default coffeeList;