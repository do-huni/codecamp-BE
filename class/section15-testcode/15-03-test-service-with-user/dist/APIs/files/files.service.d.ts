import { IFilesServiceUpload } from "./interfaces/files-service.interface";
export declare class FilesService {
    constructor();
    upload({ files }: IFilesServiceUpload): Promise<string[]>;
}
