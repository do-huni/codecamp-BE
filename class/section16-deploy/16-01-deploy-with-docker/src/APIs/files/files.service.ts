import { Injectable } from "@nestjs/common";
import { Storage } from '@google-cloud/storage';
import { IFilesServiceUpload } from "./interfaces/files-service.interface";


@Injectable()
export class FilesService{
	constructor(){}
	
	async upload({files}: IFilesServiceUpload ): Promise<string[]> {
		const waitedFiles = await Promise.all(files)
		const bucket = "codecamp-gcp-storage";
		// 1. 파일을 클라우드 스토리지에 저장		
		// 1-1) 스토리지 세팅하기
		const storage = new Storage({
			projectId: "codecamp-backend-gcp",
			keyFilename: "gcp-file-storage.json",
		}).bucket(bucket);
		// 1-2) 스토리지에 파일 올리기
		console.time("시간확인");
		const results = await Promise.all(
			waitedFiles.map((el)=> 		
			new Promise<string>((resolve,reject)=>{
				el.createReadStream()
				.pipe(storage.file(el.filename).createWriteStream())
				.on('finish', ()=>resolve(`${bucket}/${el.filename}`))
				.on('error', ()=>reject("실패"))
			})
			)
		);
		console.timeEnd("시간확인");

		return results;
	}
}