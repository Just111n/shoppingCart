import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });
  const hostDomain = AppModule.isDev
    ? `${AppModule.host}:${AppModule.port}`
    : AppModule.host;

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Shopping Cart API')
    .setDescription('API for Shopping Cart - Redux Assignment')
    .setVersion('1.0.0')
    .addServer(hostDomain)
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/document', app, swaggerDocument);
  await app.listen(AppModule.port);
  console.log(`Server is running on PORT: ${AppModule.port}`);
}
bootstrap();
