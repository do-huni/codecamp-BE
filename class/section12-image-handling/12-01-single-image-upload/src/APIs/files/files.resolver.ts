import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { FilesService } from "./files.service";
import { FileUpload, GraphQLUpload } from "graphql-upload";

@Resolver()
export class FilesResolver{
	//DI FilesService
	constructor(private readonly filesService: FilesService){}
	
	//string uploadFile()
	@Mutation(()=> String)
	uploadFile(
	@Args({name: "file", type: ()=> GraphQLUpload}) file: FileUpload,
	):string {
		return this.filesService.upload({file});
	}
	
}