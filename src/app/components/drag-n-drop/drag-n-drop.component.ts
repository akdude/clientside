import { Component, OnInit, Input, EventEmitter, HostBinding, HostListener, Output, ElementRef } from '@angular/core';
import { MediaFile } from 'src/app/models/media-file';
import { MEDIA_FILES_DIV_ID } from 'src/app/constants';

@Component({
  selector: 'dnd',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mediaFilesDivId = MEDIA_FILES_DIV_ID;
  mediaFiles: MediaFile[] = [];
  @Input() showProgress = true;
  @Input() uploadProgress = 0;
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();
  

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.mediaFiles.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.mediaFiles.length) {
        return;
      } else {
        // const progressInterval = setInterval(() => {
        //   if (this.mediaFiles[index].uploadProgress === 100) {
        //     clearInterval(progressInterval);
        //     this.uploadFilesSimulator(index + 1);
        //   } else {
        //     this.mediaFiles[index].uploadProgress += 5;
        //   }
        // }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const file of files) {
      file.uploadProgress = 0;
      this.setFile(file);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    if (evt.dataTransfer.files.length > 0) {
      this.fileDropped.emit(evt.dataTransfer.files);
      for(let f = 0; f < evt.dataTransfer.files.length; f++){
        this.setFile(evt.dataTransfer.files[f]);
      }
    }
  }

  setFile(file) {
    var reader = new FileReader();
      let mediaFile = new MediaFile();
      //Get base64
      reader.onload = function (event) {
        mediaFile.base64 = event.target.result.toString();
        // will used in Advertisement update an existing media to save, See AvdertisementEdit Component for more.
        mediaFile.image = mediaFile.base64;
      };
      let d = reader.readAsDataURL(file);
      mediaFile.size = file.size;
      mediaFile.name = file.name;
      mediaFile.idAdGallery = "";
      this.mediaFiles.push(mediaFile);
  }

}
