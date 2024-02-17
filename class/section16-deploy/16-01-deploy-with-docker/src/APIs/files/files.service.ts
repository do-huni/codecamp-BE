import { Injectable } from "@nestjs/common";
import { Storage } from '@google-cloud/storage';
import { IFilesServiceUpload } from "./interfaces/files-service.interface";


@Injectable()
export class FilesService{
	constructor(){}
	
	upload({file}: IFilesServiceUpload ): string {
		// 1. 파일을 클라우드 스토리지에 저장
		
		// 1-1) 스토리지 세팅하기
		const storage = new Storage({
			projectId: "",
			keyFilename: "gcp-file-storage.json",
		}).bucket("");
		// 1-2) 스토리지에 파일 올리기
		file.createReadStream()
			.pipe(storage.file("my_image")
				  .createWriteStream())
			.on("finish",()=>{
			console.log("성공");
		})
			.on("error", ()=>{
			console.log("실패");
		});
		return "끝!!"
	}
}