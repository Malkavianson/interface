import { v4 as uuidv4 } from "uuid";

export class InternalId {
	// criar enums do status [created, updated, deleted, active, deactivated]
	protected _id: string;
	protected _type: string;
	protected _dbId: string | undefined;
	protected _createdAt: Date;
	protected _status = "created"; // default
	// protected _createdBy: Usuario;
	// protected _historico: string[];

	/**
	 * @description Dados de identificação do objeto
	 * 
	 * @constructor (id: string, type: string)
	 * 
	 */
	constructor(type: string, id?: string) {
		this._type = type;
		if (id) this._dbId = id;
		this._id = uuidv4().toString();
		this._createdAt = new Date();
	}

	/**
	 * @description retorna o ID do banco de dados
	 * 
	 * @returns {string | undefined}
	 *
	 * @memberof InternalId
	 */
	get id(): string | undefined {
		return this._dbId;
	}

	/**
	 * @description retorna o ID deste objeto
	 * 
	 * @returns {string | undefined}
	 *
	 * @memberof InternalId
	 */
	get generalId(): string {
		return this._id;
	}

	/**
	 * @description retorna o TIPO deste objeto
	 * 
	 * @returns {string}
	 *
	 * @memberof InternalId
	 */
	get type(): string {
		return this._type;
	}

	/**
	 * @description retorna a data de criação deste objeto
	 * 
	 * @returns {string}
	 *
	 * @memberof InternalId
	 */
	get createdAt(): Date {
		return this._createdAt;
	}

	/**
	 * @description retorna o status deste objeto
	 * 
	 * @returns {string}
	 *
	 * @memberof InternalId
	 */
	get status(): string {
		return this._status;
	}
}


const teste = new InternalId("teste")