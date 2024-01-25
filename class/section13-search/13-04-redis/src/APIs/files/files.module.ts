import { Module } from '@nestjs/common';
import { FilesResolver } from './files.resolver';
import { FilesService } from './files.service';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [
		TypeOrmModule.forFeature([

		])
	],
	
	providers: [
		FilesResolver,
		FilesService,		
	]
})
export class FilesModule{}