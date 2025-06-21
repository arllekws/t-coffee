import { MdAttachMoney } from "react-icons/md";
import { FaMoneyCheck, FaMoneyBill } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import styles from "./styles.module.css"
import { useState } from "react";

export default function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedPayment, setSelectedPayment] = useState("");

  interface PaymentTypeProps {
    paymentType: string;
  }

  const handleSelect = (paymentType: PaymentTypeProps["paymentType"]) => {
    setSelectedPayment(paymentType);
  };

  return (
    <div className={styles.paymentContainer}>
        <div className={styles.paymentHeader}>
          <div className={styles.icon}>
            <MdAttachMoney size={30}/>
          </div>
            <div>
              <p className={styles.p1}>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
            </div>
        </div>

        <div className={styles.paymentTypes}>
      <button
        type="button"
        onClick={() => handleSelect("credito")}
        className={selectedPayment === "credito" ? styles.selected : ""}
      >
        <FaMoneyCheck /> CARTÃO DE CRÉDITO
      </button>

      <button
        type="button"
        onClick={() => handleSelect("debito")}
        className={selectedPayment === "debito" ? styles.selected : ""}
      >
        <CiMoneyCheck1 /> CARTÃO DE DÉBITO
      </button>

      <button
        type="button"
        onClick={() => handleSelect("dinheiro")}
        className={selectedPayment === "dinheiro" ? styles.selected : ""}
      >
        <FaMoneyBill /> DINHEIRO
      </button>
    </div>
    </div>
  )
}

