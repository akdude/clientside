import { MediaType } from '../enums';

export class MediaFile {
    id: any;
    size: number;
    uploadProgress: number;
    mediaType: MediaType;
    idAdGallery: string;
    image:string;
    type: string;
    name: string;
    url: string;
    base64: string;
    extension: string;
}
