export interface IUsuario {
	email: string;
	senha: string;
	role: string;
}

export interface IPessoa extends Partial<IDocumentos>, Partial<IEndereço> {
	nome?: string;
	dataNascimento?: Date;
	telefone?: string;
	profissao?: string;
	estadoCivil?: string;
}

export interface IEndereço {
	logradouro?: string;
	numero?: string;
	cep?: string;
	bairro?: string;
	cidade?: string;
	estado?: string;
	pais?: string;
}

export interface IDocumentos {
	cpf?: string;
	rg?: string;
}
