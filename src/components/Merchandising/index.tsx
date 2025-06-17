import Icon from '../../assets/icon.svg';
import Icon2 from '../../assets/icon2.svg';
import Icon3 from '../../assets/icon3.svg';
import icon4 from '../../assets/icon4.svg';
import styles from './styles.module.css';
import Imagem from '../../assets/Imagem.svg';

export default function Merchandising() {
  return (
    <div className={styles.MerchandisingContainer}>
        <div className={styles.MerchandisingContent}>
            <h1 className={styles.title}>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className={styles.description}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>

            <div className={styles.benefitsList}>
                <div className={styles.BenefitsGroupRight}>
                    <div className={styles.BenefitItem}>
                        <img src={Icon} alt="" /> 
                        <p>Compra simples e segura</p>
                    </div>
                    <div className={styles.BenefitItem}>
                        <img src={Icon2} alt="" /> 
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                </div>
                <div className={styles.BenefitsGroupRight}>
                    <div className={styles.BenefitItem}>
                        <img src={icon4} alt="" /> 
                        <p>Entrega rápida e prática</p>
                    </div>
                    <div className={styles.BenefitItem}>
                        <img src={Icon3} alt="" /> 
                        <p>Variedade de cafés especiais</p>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.MerchandisingImage}>
            <img src={Imagem} alt="Cafés variados" />
        </div>
    </div>
  )
}
