export interface IComentario {
	id: string;
	user: string;
	comentario: string;
}

export interface IPostagem {
	nome: string;
	titulo: string;
	urlImagemCabecalho: string;
	conteudo: string;
	urlImagemCorpo: string[];
	curtidas: string[];
	comentarios: IComentario[];
}
