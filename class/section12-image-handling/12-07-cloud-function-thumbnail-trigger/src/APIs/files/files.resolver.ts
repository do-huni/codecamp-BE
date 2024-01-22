import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { FilesService } from "./files.service";
import { FileUpload, GraphQLUpload } from "graphql-upload";

@Resolver()
export class FilesResolver{
	//DI FilesService
	constructor(private readonly filesService: FilesService){}
	
	//string uploadFile()
	@Mutation(()=> [String])
	uploadFiles(
	@Args({name: "files", type: ()=> [GraphQLUpload]}) files: FileUpload[],
	):Promise<string[]> {	
		return this.filesService.upload({files});
	}
	
// 	@Query(()=> String)
// 	testFile(): string{
// 		return "test";
// 	}
	
}