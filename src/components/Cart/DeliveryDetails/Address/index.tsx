import { useState } from "react";
import { useAddress } from "../../../../contexts/AdressContext";
import { MdAddLocationAlt } from "react-icons/md";
import styles from "./styles.module.css";
import { getAddressByCep } from "../../../../services/viaCepService";


export default function Address() {
  const [cep, setCep] = useState("");
  const {address, setAddress} = useAddress();
  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Mantém só os números
    setCep(value);

    if (value.length === 8) {
      const data = await getAddressByCep(value);
          if (data) {
            setAddress({
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              uf: data.uf,
              numero: data.numero ?? "",
              complemento: data.complemento ?? "",
              cep: data.cep
            });
          } else {
            alert("CEP não encontrado!");
        }
    }
  };

  return (
    <div>
      <p className={styles.pzao}>Complete seu pedido</p>
      <div className={styles.container}>
        <div className={styles.inicio}>
          <div className={styles.icon1}>
            <MdAddLocationAlt size={30} />
          </div>
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>

        <div className={styles.input_container}>
          <div className={styles.cep}>
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={handleCepChange}
            />
          </div>
          <div className={styles.rua}>
            <input type="text" placeholder="Rua" value={address.rua} readOnly />
          </div>
          <div className={styles.numero_complemento}>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </div>
          <div className={styles.bairro_cidade_uf}>
            <input type="text" placeholder="Bairro" value={address.bairro} readOnly />
            <input type="text" placeholder="Cidade" value={address.cidade} readOnly />
            <input type="text" placeholder="UF" value={address.uf} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}
