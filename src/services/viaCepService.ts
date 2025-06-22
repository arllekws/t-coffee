export type AddressResponse = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  numero?: string;
  complemento?: string;
  cep: string;
  erro?: boolean;
};

export async function getAddressByCep(cep: string): Promise<AddressResponse | null> {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data: AddressResponse = await response.json();

    if (data.erro) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);
    return null;
  }
}
