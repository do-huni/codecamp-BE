import { Injectable } from "@nestjs/common";
import { Storage } from '@google-cloud/storage';
import { IFilesServiceUpload } from "./interfaces/files-service.interface";


@Injectable()
export class FilesService{
	constructor(){}
	
	async upload({files}: IFilesServiceUpload ): Promise<string[]> {
		const waitedFiles = [];
		waitedFiles[0] = await files[0];
		waitedFiles[1] = await files[1];
		
		// 1. 파일을 클라우드 스토리지에 저장
		
		// 1-1) 스토리지 세팅하기
		const storage = new Storage({
			projectId: "codecamp-backend-gcp",
			keyFilename: "gcp-file-storage.json",
		}).bucket("");
		// 1-2) 스토리지에 파일 올리기
		console.time("시간확인");
		const results = [];
		for(let i = 0; i < waitedFiles.length; i++){
			results[i] = await new Promise((resolve, reject) => {
				waitedFiles[i].createReadStream()
					.pipe(storage.file(waitedFiles[i].filename)
						  .createWriteStream())
					.on("finish",()=>resolve("성공"))
					.on("error", ()=>reject("실패"));		
			})			
		}
		console.timeEnd("시간확인");

		return results;
	}
}