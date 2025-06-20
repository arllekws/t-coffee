import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import styles from "./styles.module.css";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Header from "../../components/Header";

export default function ProductDetailPage() {
  const { description } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.description === description);

  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Produto não encontrado</p>;

  const isFavorite = favorites.includes(product.description);

  return (
    <>
      <Header />
    <div className={styles.productDetailContainer}>
      {/* Botão de voltar */}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <img src={product.image} alt={product.type} className={styles.productImage} />

      <h1 className={styles.productTitle}>{product.description}</h1>
      <p className={styles.productType}>Tipo: {product.type}</p>
      <p className={styles.productDetails}>{product.details}</p>
      {/* Lista de Ingredientes */}
      {product.ingredients && (
        <div className={styles.ingredientsList}>
          <h3>Ingredientes:</h3>
          <ul className={styles.ingredientsList}>
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>

      <div className={styles.quantityControls}>
        <button onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <button
        className={styles.addToCartButton}
        onClick={() => addToCart({ ...product, quantity })}
      >
        Adicionar ao Carrinho
      </button>

      <button
        onClick={() => toggleFavorite(product.description)}
        className={styles.favoriteButton}
      >
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
      </button>
    </div></>
  );
}
