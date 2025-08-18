import styles from './styles.module.css';
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import type { CardCoffeeProps } from '../../@types/CardCoffee.ts';
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext.tsx';
import { useFavorites } from '../../contexts/FavoriteContext';
import { Link } from "react-router-dom";

export default function CardCoffee({ image, type, description, details, price }: CardCoffeeProps) { 
  const [clicked, setClicked] = useState(false); // novo estado para animação
  /* Funções/Componente do Cartao de café, que recebe as propriedades de imagem, tipo, descrição, detalhes e preço. */
  const [quantity, setQuantity] = useState(1); /* Estado que controla a quantidade de cafés selecionados*/
  const { addToCart } = useCart(); /* Função do Context UseCart que adiciona o café ao carrinho.*/ 
  const { favorites, toggleFavorite } = useFavorites(); /*Função do useFavorites para marcar e desmarcar os favoritos */

  const isFavorite = favorites.includes(description); /*Checagem se a descrição do café já está nos favoritos */

  function handleAddToCart() {
    //Adiciona ao carrinho os dados necessarios 
    addToCart({
      image,
      type,
      description,
      price,
      quantity
    });

    setClicked(true); // ativa animação
    setTimeout(() => setClicked(false), 300); // desativa depois de 0.3s
  }
  // Aumenta a quantidade de café
  function increaseQuantity() {
    setQuantity((prev: number) => prev + 1);
  }


  // Diminui a quantidade do café, sem deixar menor que 1
  function decreaseQuantity() {
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  }

  function handleToggleFavorite() {
    // Alterna o estado de favorito, caso o usuário queira desfavoritar ou favoritar
    toggleFavorite(description);
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={type} className={styles.coffeeImage} />  {/**Recebe a imagem */}
      <h3 className={styles.coffeeType}>{type}</h3> {/**Recebe o tipo do café */}
      <Link to={`/product/${description}`}> {/**Link para os detalhes mais aprofundados do café*/}
        <p className={styles.coffeeDescription}>{description}</p> {/**Recebe o nome do café */}
      </Link>
      <p className={styles.coffeeDetails}>{details}</p>{/**Recebe os detalhes rápidos do café*/}

      <div className={styles.actions}> {/**Container de ações*/}
        <span className={styles.coffeePrice}> 
          <span className={styles.rs}>R$</span>
          {price.toFixed(2).replace('.', ',')}  {/**Recebe o preço e define a casa decimail para 2 */}
        </span>


        {/**Controle de quantidade, onde recebe as funçoes de aumento e decremento */}
        <div className={styles.quantityControls}>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        
        
          {/**Botão de adicionar no carrinho e quando clicar acontece a função de adicionar informação no carrinho*/}
        <button
          className={`${styles.cartButton} ${clicked ? styles.clicked : ''}`}
          onClick={handleAddToCart}
          >
          <FaShoppingCart />
        </button>

        {/**Botão de favoritar!!!!*/}

        <button
          onClick={handleToggleFavorite}
          className={styles.favoriteButton}
          title="Favoritar"
        > {/** Checagem de favoritos, se for favorito fica vermelho, caso contrario, ficará cinza*/}
          {isFavorite ? (
            <FaHeart color="red" size={20} />
          ) : (
            <FaRegHeart color="gray" size={20} />
          )}
        </button>
      </div>
    </div>
  );
}
