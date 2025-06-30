import { MdAttachMoney } from "react-icons/md";
import { FaMoneyCheck, FaMoneyBill } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import styles from "./styles.module.css";
import { useState } from "react";
import { usePayment } from "../../../../contexts/PaymentContext";

export default function PaymentComponent() {
  // Estado local para armazenar o método de pagamento selecionado (visualmente)
  const [selectedPayment, setSelectedPayment] = useState("");
  // Função global do contexto para salvar o método de pagamento escolhido
  const { setPaymentMethod } = usePayment();  // Pegando o setter do contexto

  // Tipagem para que o tipo de pagamento seja uma string 
  interface PaymentTypeProps {
    paymentType: string;
  }

  // Quando um método de pagamento é selecionado
  const handleSelect = (paymentType: PaymentTypeProps["paymentType"]) => {
    setSelectedPayment(paymentType); // Atualiza o botão selecionado
    setPaymentMethod(paymentType);  // Atualizando o contexto global
  };

  return (
    <div className={styles.paymentContainer}>
      {/* Cabeçalho do componente de pagamento */}
      <div className={styles.paymentHeader}>
        <div className={styles.icon}>
          <MdAttachMoney size={30} />
        </div>
        <div>
          <p className={styles.p1}>Pagamento</p>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
        </div>
      </div>

      {/* Botões para selecionar o tipo de pagamento */}

      <div className={styles.paymentTypes}>
        <button
          type="button"
          onClick={() => handleSelect("credito")}
          className={selectedPayment === "credito" ? styles.selected : ""} //Caso seja selecionado ele muda de cor
        >
          <FaMoneyCheck size={15}/> CARTÃO DE CRÉDITO
        </button>

        <button
          type="button"
          onClick={() => handleSelect("debito")}
          className={selectedPayment === "debito" ? styles.selected : ""}
        >
          <CiMoneyCheck1 size={20}/> CARTÃO DE DÉBITO
        </button>

        <button
          type="button"
          onClick={() => handleSelect("dinheiro")}
          className={selectedPayment === "dinheiro" ? styles.selected : ""}
        >
          <FaMoneyBill size={15}/> DINHEIRO
        </button>
      </div>
    </div>
  );
}
