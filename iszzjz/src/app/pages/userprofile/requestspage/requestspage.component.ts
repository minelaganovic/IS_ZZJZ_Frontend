import { HttpClient,HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';
import { EventEmitter,Output} from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
interface User{
  userid: number;
  document: string;
  type_id: number;
}
@Component({
  selector: 'app-requestspage',
  templateUrl: './requestspage.component.html',
  styleUrls: ['./requestspage.component.css']
})
export class RequestspageComponent implements OnInit{
  public cardsinfo: any=[];
  public userinfo:any=[];
  requestForm: FormGroup;
  public rtype: any=[];
  public message:string;
  public user:User;
  public progress: number;
  public response: {dbPath: ''};
constructor(private api: ApiService,
   private auth: AuthService, 
   private store:UserstoreService, 
   private fb: FormBuilder ,
   private toast: NgToastService){
}
ngOnInit(): void {
  this.store.getUserInfoFromStore()
  .subscribe(val =>{
   let infU:[] =this.auth.getArrayUFromToken();
   this.userinfo= infU;
  })
  this.api.getRTypes()
  .subscribe(
  res=>{
    this.rtype=res;
  }
  )
    this.requestForm = this.fb.group({
      requesttype: [null]
    });
}
onCreate = () => {
  this.user = {
    userid: 1,
    document: this.response.dbPath,
    type_id: this.requestForm.get('requesttype')?.value
  }
  this.api.SaveR( this.user)
  .subscribe({
    next:(res)=>{
      //alert(res.message);
      this.toast.success({detail: "Uspešno", summary: res.message, duration:5000}); //5000milisekundi
      this.requestForm.reset();
    },
    error:(err)=>{
      //alert(err.message)
      this.toast.error({detail: "Neuspešno", summary:"Nešto nije u redu!Proverite podatke!", duration:5000})
    }
  }) 
  console.log( this.user)

}
uploadFinished = (event:any) => { 
  this.response = event; 
}
}

