// Define o tipo da resposta da API do ViaCEP
export type AddressResponse = {
  logradouro: string;   // Rua
  bairro: string;       // Bairro
  localidade: string;   // Cidade
  uf: string;           // Estado (Unidade Federativa)
  numero?: string;      // Número (opcional, não vem da API mas pode ser preenchido pelo usuário)
  complemento?: string; // Complemento (opcional, também pode ser preenchido depois)
  cep: string;          // CEP retornado pela API
  erro?: boolean;       // Campo que indica erro (presente se o CEP for inválido)
};

// Função assíncrona que busca o endereço pelo CEP usando a API ViaCEP
export async function getAddressByCep(cep: string): Promise<AddressResponse | null> {
  try {
    // Faz a requisição para a API ViaCEP com o CEP informado
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // Converte a resposta para JSON com a estrutura tipada
    const data: AddressResponse = await response.json();

    // Se a API retornar erro (ex: CEP inválido), retorna null
    if (data.erro) {
      return null;
    }

    // Retorna os dados do endereço caso tudo esteja certo
    return data;
  } catch (error) {
    // Em caso de falha na requisição, exibe o erro no console e retorna null
    console.error("Erro ao buscar o CEP:", error);
    return null;
  }
}
