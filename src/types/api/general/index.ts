import { v4 as uuidv4 } from "uuid";

export class InternalId {
	private _id: string;
	protected _type: string;
	protected _dbId: string;

	constructor(id: string, type: string) {
		this._type = type;
		this._dbId = id;
		this._id = uuidv4().toString();
	}

	get id(): string {
		return this._dbId;
	}

	set id(value: string) {
		this._dbId = value;
	}

	get generalId(): string {
		return this._id;
	}

	get type(): string {
		return this._type;
	}
}
