import { IFilesServiceUpload } from "./interfaces/files-service.interface";
export declare class FilesService {
    constructor();
    upload({ file }: IFilesServiceUpload): string;
}
