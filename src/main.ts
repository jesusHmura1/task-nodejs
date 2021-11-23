//levanta el servidor
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AllExceptionFilter } from "./commons/filters/http-exception.filter";
import { TimeOutInterceptor } from "./commons/interceptors/timeout.interceptor";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());

  const options = new DocumentBuilder()
    .setTitle("Document api Study")
    .setDescription("diferent api rest")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs', app, document, {swaggerOptions: {
    filter: true
  }} );
  await app.listen(3000);
}
bootstrap();
