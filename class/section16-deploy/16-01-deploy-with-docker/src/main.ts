import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.enableCors();
	app.setViewEngine("hbs");
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters(new HttpExceptionFilter());
	await app.listen(3000);
}
bootstrap();
