import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('CloudDisk')
        .setDescription('CloudDisk API description')
        .setVersion('1.0.0')
        .addTag('CloudDisk')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

}

start()