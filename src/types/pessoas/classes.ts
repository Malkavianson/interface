import { InternalId } from "../api";
import { IPessoaData, IUsuarioData } from "./interfaces";

export class Pessoa extends InternalId {
	protected _nome: string | undefined;
	protected _dataNascimento: Date | undefined;
	protected _logradouro: string | undefined;
	protected _numero: string | undefined;
	protected _cep: string | undefined;
	protected _bairro: string | undefined;
	protected _cidade: string | undefined;
	protected _estado: string | undefined;
	protected _pais: string | undefined;
	protected _cpf: string | undefined;
	protected _rg: string | undefined;

	constructor(
		id: string,
		{
			nome,
			dataNascimento,
			logradouro,
			numero,
			cep,
			bairro,
			cidade,
			estado,
			pais,
			cpf,
			rg,
		}: IPessoaData,
	) {
		super(id, "Pessoa");
		this._nome = nome;
		this._dataNascimento = dataNascimento;
		this._logradouro = logradouro;
		this._numero = numero;
		this._cep = cep;
		this._bairro = bairro;
		this._cidade = cidade;
		this._estado = estado;
		this._pais = pais;
		this._cpf = cpf;
		this._rg = rg;
	}

	get nome(): string | undefined {
		return this._nome;
	}
	set nome(value: string | undefined) {
		this._nome = value;
	}

	get dataNascimento(): Date | undefined {
		return this._dataNascimento;
	}
	set dataNascimento(value: Date | undefined) {
		this._dataNascimento = value;
	}

	get logradouro(): string | undefined {
		return this._logradouro;
	}
	set logradouro(value: string | undefined) {
		this._logradouro = value;
	}

	get numero(): string | undefined {
		return this._numero;
	}
	set numero(value: string | undefined) {
		this._numero = value;
	}

	get cep(): string | undefined {
		return this._cep;
	}
	set cep(value: string | undefined) {
		this._cep = value;
	}

	get bairro(): string | undefined {
		return this._bairro;
	}
	set bairro(value: string | undefined) {
		this._bairro = value;
	}

	get cidade(): string | undefined {
		return this._cidade;
	}
	set cidade(value: string | undefined) {
		this._cidade = value;
	}

	get estado(): string | undefined {
		return this._estado;
	}
	set estado(value: string | undefined) {
		this._estado = value;
	}

	get pais(): string | undefined {
		return this._pais;
	}
	set pais(value: string | undefined) {
		this._pais = value;
	}

	get cpf(): string | undefined {
		return this._cpf;
	}
	set cpf(value: string | undefined) {
		this._cpf = value;
	}

	get rg(): string | undefined {
		return this._rg;
	}

	set rg(value: string | undefined) {
		this._rg = value;
	}
}

export class Usuario extends Pessoa {
	protected _email: string;
	protected _senha: string;
	protected _role: string;

	constructor(id: string, { email, senha, role }: IUsuarioData) {
		super(id, {});
		this._email = email;
		this._senha = senha;
		this._role = role;
	}

	get email(): string {
		return this._email;
	}
	set email(value: string) {
		this._email = value;
	}

	get senha(): string {
		return this._senha;
	}
	set senha(value: string) {
		this._senha = value;
	}

	get role(): string {
		return this._role;
	}
	set role(value: string) {
		this._role = value;
	}
}

const dataTeste: IUsuarioData = {
	email: "test@test.com",
	role: "Administrator",
	senha: "1234abc",
};
const teste = new Usuario("teste", dataTeste);

console.log(teste)
