import { MdAttachMoney } from "react-icons/md";
import { FaMoneyCheck, FaMoneyBill } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";

export default function index() {
  return (
    <div>
        <div>
            <MdAttachMoney />
            <p>Pagamento</p>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
        </div>

        <div>
            <button type="submit"> <FaMoneyCheck /> CARTAO DE CREDITO</button>
            <button type="submit"> <CiMoneyCheck1 /> CARTAO DE DEBITO</button>
            <button type="submit"><FaMoneyBill /> DINHEIRO</button>
        </div>
    </div>
  )
}
