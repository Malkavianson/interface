export interface IPessoaData {
	nome?: string;
	dataNascimento?: Date;
	logradouro?: string;
	numero?: string;
	cep?: string;
	bairro?: string;
	cidade?: string;
	estado?: string;
	pais?: string;
	cpf?: string;
	rg?: string;
}

export interface IUsuarioData {
	email: string;
	senha: string;
	role: string;
}
