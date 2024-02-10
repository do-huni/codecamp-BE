"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const storage_1 = require("@google-cloud/storage");
let FilesService = class FilesService {
    constructor() { }
    async upload({ files }) {
        const waitedFiles = await Promise.all(files);
        const bucket = "codecamp-gcp-storage";
        const storage = new storage_1.Storage({
            projectId: "codecamp-backend-gcp",
            keyFilename: "gcp-file-storage.json",
        }).bucket(bucket);
        console.time("시간확인");
        const results = await Promise.all(waitedFiles.map((el) => new Promise((resolve, reject) => {
            el.createReadStream()
                .pipe(storage.file(el.filename).createWriteStream())
                .on('finish', () => resolve(`${bucket}/${el.filename}`))
                .on('error', () => reject("실패"));
        })));
        console.timeEnd("시간확인");
        return results;
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FilesService);
//# sourceMappingURL=files.service.js.map