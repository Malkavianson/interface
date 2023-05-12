import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
// import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/server";
import { Logger } from "@nestjs/common";

const bootstrap = async () => {
	const logger = new Logger("bootstrap");
	const app = await NestFactory.create(AppModule);
	await app.init();

	// app.enableCors({
	// 	allowedHeaders: "*",
	// 	methods: "HEAD, GET, PATCH, POST, PUT, DELETE",
	// 	origin: "*",
	// });
	// app.set("trust proxy", 1);

	// app.useGlobalPipes(
	// 	new ValidationPipe({
	// 		forbidNonWhitelisted: true,
	// 		whitelist: true,
	// 		transform: true,
	// 	}),
	// );

	const config = new DocumentBuilder()
		.setTitle("Nest inside Next API")
		.setDescription("API test")
		.setVersion("1.0.0")
		// .setExternalDoc(`Local Documentation`, `http://localhost:${PORT}/api/docs`)
		.addTag("Status")
		// .addServer(`http://localhost:${PORT}/api/swagger`, "Local")
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("/", app, document);
	// await app.getHttpAdapter().getInstance().callback(req, res);
	await app.listen("/", (err?: Error) => {
		if (err) {
			console.log(err);
			throw err;
		} else {
			logger.log(`Application listening`);
		}
	});
};

export default bootstrap;
