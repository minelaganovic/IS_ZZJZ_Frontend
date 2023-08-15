import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable,} from '@angular/core';
import { Observable, every } from 'rxjs';
import { Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl: string="http://dinella-001-site1.gtempurl.com/api/Request/";
  public message:string;
  public progress: number;
  @Output() public onUploadFinished= new EventEmitter();

  constructor(private http: HttpClient) { }
  public uploadFile = (files:any) =>{
    if(files.length===0)
    return;
    let fileToUpload=<File>files[0];
    const formData= new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.http.post('http://dinella-001-site1.gtempurl.com/api/Request/', formData,{
      reportProgress: true,
      observe:'events'
    }).subscribe(event=>{
      if(event.type===HttpEventType.UploadProgress){
        this.progress= Math.round(100*event.loaded / event.total!);
      }else if(event.type===HttpEventType.Response){
        this.message='Uspešno sačuvano';
        this.onUploadFinished.emit(event.body);
      }
    })
  }
}
