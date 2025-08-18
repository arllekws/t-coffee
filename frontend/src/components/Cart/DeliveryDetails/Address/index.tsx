import { useState } from "react";
import { useAddress } from "../../../../contexts/AdressContext";
import { MdAddLocationAlt } from "react-icons/md";
import styles from "./styles.module.css";
import { getAddressByCep } from "../../../../services/viaCepService";

// Componente principal responsável pelo formulário de endereço
export default function Address() {
  // Estado local para controlar o valor do campo CEP digitado pelo usuário
  const [cep, setCep] = useState("");
  // Obtém o endereço atual e a função para atualizá-lo a partir do contexto
  const {address, setAddress} = useAddress();
  // Função executada quando o usuário digita no campo de CEP
  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove qualquer caractere que não seja número
    const value = e.target.value.replace(/\D/g, ""); // Mantém só os números
    setCep(value);

    // Se o CEP tiver 8 dígitos, faz a busca na API ViaCEP
    if (value.length === 8) {
      const data = await getAddressByCep(value);
         // Se encontrar, atualiza o contexto com os dados retornados
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
            alert("CEP não encontrado!");// Se não encontrar, exibe alerta
        }
    }
  };

  return (
    <div>
      <p className={styles.pzao}>Complete seu pedido</p> {/* Título Complete seu pedido*/}
      <div className={styles.container}>
        <div className={styles.inicio}> {/* Container de cabeçalho do componente, recebe icons e frases */} 
          <div className={styles.icon1}>
            <MdAddLocationAlt size={30} />
          </div>
          <div>
            <p className={styles.adressP}>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>

        {/* Campos de input do formulário de endereço */}
        <div className={styles.input_container}>
          <div className={styles.cep}>
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={handleCepChange}
            />
          </div>
          {/* Rua: preenchido automaticamente e somente leitura */}
          <div className={styles.rua}>
            <input type="text" placeholder="Rua" value={address.rua} readOnly />
          </div>

          {/* Número e Complemento: editáveis */}
          <div className={styles.numero_complemento}>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </div>

          {/* Bairro, Cidade e UF: preenchidos automaticamente e somente leitura */}
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
