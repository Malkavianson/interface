import { prisma } from "@/server";
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
			const products = await prisma.product.findMany();
			res.status(200).json(products);
		} catch (error) {
			res.status(500).json({ error: "Erro ao obter os produtos." });
		}
	}

	// Rota POST para criar um novo produto
	if (req.method === "POST") {
		try {
			const { name, price } = req.body;

			const createdProduct = await prisma.product.create({
				data: {
					name,
					price,
				},
			});

			res.status(201).json(createdProduct);
		} catch (error) {
			res.status(500).json({ error: "Erro ao criar o produto." });
		}
	}

	// Rota PATCH para atualizar um produto existente
	if (req.method === "PATCH") {
		try {
			const { id, name, price } = req.body;

			const updatedProduct = await prisma.product.update({
				where: { id },
				data: {
					name,
					price,
				},
			});

			res.status(200).json(updatedProduct);
		} catch (error) {
			res.status(500).json({ error: "Erro ao atualizar o produto." });
		}
	}

	if (req.method === "DELETE") {
		const { id } = req.body;
		try {
			const products = await prisma.product.delete({
				where: { id },
			});
			res.status(200).json(products);
		} catch (error) {
			res.status(500).json({ error: "Erro ao obter os produtos." });
		}
	}
	// Configuração do Swagger
	// if (req.url?.startsWith("/api-docs")) {
	// 	swaggerUi.setup(swaggerOptions)(req, res);
	// }
}
