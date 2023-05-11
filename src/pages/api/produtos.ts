// import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
// import prisma from '../../path/to/prisma/client';
// import cors from 'cors';
// import swaggerUi from 'swagger-ui-express';

// // Configuração do CORS
// const corsOptions = {
//   origin: '*', // Defina a origem permitida para sua aplicação (ex: 'http://localhost:3000')
// };

// // Configuração do Swagger
// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'API de Produtos',
//       version: '1.0.0',
//     },
//   },
//   apis: ['pages/api/product.ts'],
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) {
//   // Aplica o middleware de CORS para permitir requisições de diferentes origens
//   cors(corsOptions)(req, res, (err)=>{
//     return console.log(err)
//   });

//   // Rota GET para obter todos os produtos
//   if (req.method === 'GET') {
//     try {
//       const products = await prisma.product.findMany();
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json({ error: 'Erro ao obter os produtos.' });
//     }
//   }

//   // Rota POST para criar um novo produto
//   if (req.method === 'POST') {
//     try {
//       const { name, price } = req.body;

//       const createdProduct = await prisma.product.create({
//         data: {
//           name,
//           price,
//         },
//       });

//       res.status(201).json(createdProduct);
//     } catch (error) {
//       res.status(500).json({ error: 'Erro ao criar o produto.' });
//     }
//   }

//   // Rota PATCH para atualizar um produto existente
//   if (req.method === 'PATCH') {
//     try {
//       const { id, name, price } = req.body;

//       const updatedProduct = await prisma.product.update({
//         where: { id },
//         data: {
//           name,
//           price,
//         },
//       });

//       res.status(200).json(updatedProduct);
//     } catch (error) {
//       res.status(500).json({ error: 'Erro ao atualizar o produto.' });
//     }
//   }

//   // Rota DELETE para excluir um produto
// //   if (req.method === 'DELETE') {
// //     try {
// //       const { id } = req.body;

// //       await prisma.product.delete({
// //         where: { id },
// //       });

// //       res.status(204).end();
// //     } catch (error) {
// //       res.status(500).json({ error: 'Erro ao

// //     })}}}

//       // Rota GET para obter um produto pelo ID
//   if (req.method === 'GET') {
//     try {
//       const { id } = req.query;

//       const product = await prisma.product.findUnique({
//         where: { id: Number(id) },
//       });

//       if (!product) {
//         res.status(404).json({ error: 'Produto não encontrado.' });
//       } else {
//         res.status(200).json(product);
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Erro ao obter o produto.' });
//     }
//   }

//   // Configuração do Swagger
//   if (req.url?.startsWith('/api-docs')) {
//     swaggerUi.setup(swaggerOptions)(req, res);
//   }
// }
