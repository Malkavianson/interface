export interface IProduto {
    id?: string;
    referencia: string;
    descricao?: string;
    disponibilidade?: Date;
    especie?: string;
    genero?: EGeneroProduto;
    imagens?: string[];
    // url da imagem salvas em algum banco
    nome?: string;
    portador?: EPortadorCNPJ; // Pode se tornar relacionado ao id do cnpj/user
    porte?: EPorteProduto;
    preco?: number; // procurar salvar inteiros e colocar os centavos manualmente ex: 549850 => 5498,50
    status?: EStatusProduto;
    visibilidade?: EVisibilidadeProduto;
    tipo?: ETipoProduto;
    createdAt?: Date;
    updatedAt?: Date;
}

export enum EPortadorCNPJ {
    JiboiasBrasil,
    AnimaisBrasil
}

export enum EVisibilidadeProduto {
    JiboiasBrasil,
    AnimaisBrasil
}

export enum EPorteProduto {
    Adulto,
    Filhote
}

export enum EGeneroProduto {
    Femea,
    Macho
}

export enum EStatusProduto {
    Disponivel,
    Vendido
}

export enum ETipoProduto {
    Jiboia,
    JiboiaArcoIris,
    Piton,
    Iguana
}