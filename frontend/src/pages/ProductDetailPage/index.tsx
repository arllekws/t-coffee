import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import styles from "./styles.module.css";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Header from "../../components/Header";

// Componente principal da página de detalhes do produto
export default function ProductDetailPage() {
  // Pega o parâmetro da URL chamado 'description'
  const { description } = useParams();

  // Hook de navegação para voltar ou ir para outra página
  const navigate = useNavigate();

  // Procura o produto nos dados com base na descrição
  const product = productsData.find(p => p.description === description);

  // Função para adicionar produto ao carrinho
  const { addToCart } = useCart();

  // Estado e função de favoritos
  const { favorites, toggleFavorite } = useFavorites();

  // Estado local para controlar a quantidade do produto
  const [quantity, setQuantity] = useState(1);

  // Se o produto não for encontrado, exibe mensagem
  if (!product) return <p>Produto não encontrado</p>;

  // Verifica se o produto está nos favoritos
  const isFavorite = favorites.includes(product.description);

  return (
    <>
      {/* Cabeçalho da página */}
      <Header />

      <div className={styles.productDetailContainer}>
        {/* Botão de voltar para página anterior */}
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        {/* Imagem do produto */}
        <img src={product.image} alt={product.type} className={styles.productImage} />

        {/* Informações do produto */}
        <h1 className={styles.productTitle}>{product.description}</h1>
        <p className={styles.productType}>Tipo: {product.type}</p>
        <p className={styles.productDetails}>{product.details}</p>

        {/* Lista de ingredientes, se existir */}
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

        {/* Preço do produto */}
        <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
      <div className={styles.actionsContainer}>
        {/* Controles de quantidade */}
        <div className={styles.quantityControls}>
          <button onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>

        {/* Botão de adicionar ao carrinho */}
        <button
          className={styles.addToCartButton}
          onClick={() => addToCart({
            ...product, quantity,
            productId: "",
            imageUrl: ""
          })}
        >
          Adicionar ao Carrinho
        </button>

        {/* Botão de favorito (coração) */}
        <button
          onClick={() => toggleFavorite(product.description)}
          className={styles.favoriteButton}
        >
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
        </button>
        </div>
      </div>
    </>
  );
}