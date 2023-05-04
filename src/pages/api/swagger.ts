import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/server";
// import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// import { createServer, IncomingMessage, ServerResponse } from "http";
// import { Server } from "node:http";

const PORT = process.env.PORT || 3000;

const bootstrap = async (req: any, res: any) => {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	await app.init();

	app.enableCors({
		allowedHeaders: "*",
		methods: "HEAD, GET, PATCH, POST, PUT, DELETE",
		origin: "*",
	});
	app.set("trust proxy", 1);

	app.useGlobalPipes(
		new ValidationPipe({
			forbidNonWhitelisted: true,
			whitelist: true,
			transform: true,
		}),
	);

	// const config = new DocumentBuilder()
	// 	.setTitle("Nest inside Next API")
	// 	.setDescription("API test")
	// 	.setVersion("1.0.0")
	// 	// .setExternalDoc(`Local Documentation`, `http://localhost:${PORT}/api/docs`)
	// 	.addTag("Status")
	// 	// .addServer(`http://localhost:${PORT}/api/swagger`, "Local")
	// 	.build();

	console.log();
	console.log("foi até aqui");
	console.log();

	// const document = SwaggerModule.createDocument(app, config);
	// SwaggerModule.setup("/docs", app, document);

	// const nextHandler: NextApiHandler = (
	// 	req: NextApiRequest,
	// 	res: NextApiResponse,
	// ) => {
	// 	return app.getRequestHandler()(req, res);
	// };

	// function createRequestListener(handler: NextApiHandler): Server {
	// 	return createServer((req: IncomingMessage, res: ServerResponse) => {
	// 		handler(req as NextApiRequest, res as NextApiResponse);
	// 	});
	// }

	// const server = createRequestListener(nextHandler);
	// await app.getHttpAdapter().getInstance().callback(req, res);
	// await app.listen(PORT, (err?: Error) => {
	// 	if (err) {
	// 		console.log(err);
	// 		throw err;
	// 	}
	// 	console.log(`> Ready on http://localhost:${PORT}`);
	// });

	// server.listen(PORT, (err?: Error) => {
	// 	if (err) {
	// 		console.log(err);
	// 		throw err;
	// 	}
	// 	console.log(`> Ready on http://localhost:${PORT}`);
	// });
};

export default bootstrap;
