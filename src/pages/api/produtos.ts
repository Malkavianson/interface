import { prisma } from "@/server";
import { IProduto } from "@/types/produtos";
import { NextApiRequest, NextApiResponse } from "next";

// import swaggerUi from "swagger-ui-express";

// Configuração do Swagger
// const swaggerOptions = {
// 	swaggerDefinition: {
// 		info: {
// 			title: "API de Produtos",
// 			version: "1.0.0",
// 		},
// 	},
// 	apis: ["pages/api/product.ts"],
// };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "GET") {
		try {
			// if (req.query !== undefined) {
			// 	const id: string = req.query.id;
			// 	const produto = await prisma.produto.findUnique({
			// 		where: { id },
			// 	})
			// 	res.status(200).json(produto);
			// } else {
			const produtos = await prisma.produto.findMany();
			res.status(200).json(produtos);
			// }
		} catch (error) {
			res.status(500).json({ error: "Erro ao obter os produtos." });
		}
	}

	// Rota POST para criar um novo produto
	if (req.method === "POST") {
		try {
			const data: IProduto = req.body;

			const criarProduto = await prisma.produto.create({
				data: {
					referencia: data.referencia,
				}
			});

			res.status(201).json(criarProduto);
		} catch (error) {
			res.status(500).json({ error: "Erro ao criar o produto." });
		}
	}

	// Rota PATCH para atualizar um produto existente
	if (req.method === "PATCH") {
		try {
			const data: IProduto = req.body;

			const produtoAtualizado = await prisma.produto.update({
				where: { id: data.id },
				data: {
					referencia: data.referencia,
				}
			});

			res.status(200).json(produtoAtualizado);
		} catch (error) {
			res.status(500).json({ error: "Erro ao atualizar o produto." });
		}
	}

	if (req.method === "DELETE") {
		const { id } = req.body;
		try {
			const produtos = await prisma.produto.delete({
				where: { id },
			});
			res.status(200).json(produtos);
		} catch (error) {
			res.status(500).json({ error: "Erro ao obter os produtos." });
		}
	}
	// Configuração do Swagger
	// if (req.url?.startsWith("/api-docs")) {
	// 	swaggerUi.setup(swaggerOptions)(req, res);
	// }
}
