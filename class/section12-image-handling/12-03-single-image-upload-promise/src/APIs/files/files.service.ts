import { Injectable } from "@nestjs/common";
import { Storage } from '@google-cloud/storage';
import { IFilesServiceUpload } from "./interfaces/files-service.interface";


@Injectable()
export class FilesService{
	constructor(){}
	
	async upload({file}: IFilesServiceUpload ): Promise<string> {
		// 1. 파일을 클라우드 스토리지에 저장
		
		// 1-1) 스토리지 세팅하기
		const storage = new Storage({
			projectId: "codecamp-backend-gcp",
			keyFilename: "gcp-file-storage.json",
		}).bucket("");
		// 1-2) 스토리지에 파일 올리기
		const result = await new Promise((resolve, reject) => {
			file.createReadStream()
				.pipe(storage.file(file.filename)
					  .createWriteStream())
				.on("finish",()=>{
				console.log("성공");
				resolve("성공");
			})
				.on("error", ()=>{
				console.log("실패");
				reject("실패");
			});			
		})

		return result;
	}
}