import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { hceApiService } from 'src/app/services/hce-api.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-myguidance',
  templateUrl: './myguidance.component.html',
  styleUrls: ['./myguidance.component.css']
})
export class MyguidanceComponent {
  public uputinfo: any=[];
  public userinfo:any=[];
  teList$!:Observable<any[]>;
  hceList$!:Observable<any[]>;
  
constructor(private api: ApiService, private auth: AuthService, private store:UserstoreService, private toast: NgToastService, private service:hceApiService){
}
hceMap:Map<number, string> = new Map()

uputinfo$!:Observable<any[]>;
public prviClanNiza: any = this.userinfo[0];

ngOnInit(): void {

  this.store.getUserInfoFromStore()
  .subscribe(val =>{
   let infU:[] =this.auth.getArrayUFromToken();
   this.userinfo= infU;
  })
  //this.refreshUputMap();
  this.teList$= this.api.getTEList();
  this.hceList$= this.service.getHCEList();

  this.api.getUList(this.userinfo[0])
  .subscribe(
    {
      next:(res)=>{
      this.uputinfo=res;
      console.log(this.uputinfo)
    },
    error:(err)=>{
      this.toast.error({detail: "Predajte zahtev!", summary:"Nemate nijedan uput!", duration:5000})
      this.uputinfo=null
    }})
}
/*refreshUputMap() {
  this.api.getUList(this.userinfo(0)).subscribe(data => {
    this.uputinfo = data;

    for(let i = 0; i < data.length; i++)
    {
      this.hceMap.set(this.userinfo[i].user_id, this.userinfo[i].therapy);
    }
  })
}*/

}
