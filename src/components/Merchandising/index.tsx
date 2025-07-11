import Icon from '../../assets/Icon.svg';
import Icon2 from '../../assets/Icon2.svg';
import Icon3 from '../../assets/Icon3.svg';
import icon4 from '../../assets/icon4.svg';
import styles from './styles.module.css';
import Imagem_Merch from '../../assets/Imagem_Merch.svg';

export default function Merchandising() {
  return (
    <div className={styles.MerchandisingContainer}>
        <div className={styles.MerchandisingContent}>
            <h1 className={styles.title}>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className={styles.description}>Com o T+ Coffee você recebe seu café onde estiver, a qualquer hora.</p>

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
            <img src={Imagem_Merch} alt="Cafés variados" />
        </div>
    </div>
  )
}
