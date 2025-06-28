import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
        <h1>404 - Ops, Parece que essa página não foi encontrada!!</h1>
        <button>
          <Link to="/">Voltar para a página inicial</Link>
        </button>
    </div>
  )
}
