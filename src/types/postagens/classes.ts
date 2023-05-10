import { InternalId } from "../api";
import { IComentario, IPostagem } from "./interfaces";

export class Postagens extends InternalId {
	protected _nome: string | undefined;
	protected _titulo: string | undefined;
	protected _urlImagemCabecalho: string | undefined;
	protected _conteudo: string | undefined;
	protected _urlImagemCorpo: string[] | undefined;
	protected _curtidas: string[] | undefined;
	protected _comentarios: IComentario[] | undefined;

	constructor(
		{
			nome,
			titulo,
			urlImagemCabecalho,
			conteudo,
			urlImagemCorpo,
			curtidas,
			comentarios,
		}: Partial<IPostagem>,
		id?: string,
	) {
		super("postagem", id ? id : undefined);
		this._nome = nome;
		this._titulo = titulo;
		this._urlImagemCabecalho = urlImagemCabecalho;
		this._conteudo = conteudo;
		this._urlImagemCorpo = urlImagemCorpo;
		this._curtidas = curtidas;
		this._comentarios = comentarios;
	}

	get nome(): string | undefined {
		return this._nome;
	}
	set nome(value: string | undefined) {
		if (value) this._nome = value;
	}

	get titulo(): string | undefined {
		return this._titulo;
	}
	set titulo(value: string | undefined) {
		if (value) this._titulo = value;
	}

	get urlImagemCabecalho(): string | undefined {
		return this._urlImagemCabecalho;
	}
	set urlImagemCabecalho(value: string | undefined) {
		if (value) this._urlImagemCabecalho = value;
	}

	get conteudo(): string | undefined {
		return this._conteudo;
	}
	set conteudo(value: string | undefined) {
		if (value) this._conteudo = value;
	}

	get urlImagemCorpo(): string[] | undefined {
		return this._urlImagemCorpo;
	}
	set urlImagemCorpo(value: string[] | undefined) {
		if (value) this._urlImagemCorpo = value;
	}

	get curtidas(): string[] | undefined {
		return this._curtidas;
	}
	set curtidas(value: string[] | undefined) {
		if (value) this._curtidas = value;
	}

	get comentarios(): IComentario[] | undefined {
		return this._comentarios;
	}
	set comentarios(value: IComentario[] | undefined) {
		if (value) this._comentarios = value;
	}
}
