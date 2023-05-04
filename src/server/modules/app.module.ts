import { Module } from "@nestjs/common";
import { AppController } from "../controllers";
import { AppService } from "../services";

@Module({
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	// configure(consumer: any) {
	// 	const options = new DocumentBuilder()
	// 		.setTitle("API")
	// 		.setDescription("API description")
	// 		.setVersion("1.0")
	// 		.build();
	// 	const document = SwaggerModule.createDocument(this.app, options);
	// 	SwaggerModule.setup("api/docs", this.app, document);
	// }
}
