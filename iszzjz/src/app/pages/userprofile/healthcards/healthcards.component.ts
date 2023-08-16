import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-healthcards',
  templateUrl: './healthcards.component.html',
  styleUrls: ['./healthcards.component.css']
})
export class HealthcardsComponent implements OnInit{
  public cardsinfo: any=[];
  public userinfo:any=[];
constructor(private api: ApiService, private auth: AuthService, private store:UserstoreService, private toast: NgToastService ){
}
hceMap:Map<number, string> = new Map()

cardsInfo$!:Observable<any[]>;
ngOnInit(): void {
  try {

    this.store.getUserInfoFromStore()
    .subscribe(val =>{
     let infU:[] =this.auth.getArrayUFromToken();
     this.userinfo= infU;
    })
    this.refreshHCEMap();
    /*this.api.getCardsInfo(1)
    .subscribe(
      {
        next:(res)=>{
        this.cardsinfo=res;
      },
      error:(err)=>{
        this.toast.error({detail: "Predajte zahtev!", summary:"Nemate aktiviranu zdravstvenu knjižicu!", duration:5000})
        this.cardsinfo=null
      }})*/
  }
  catch(e){
    console.log("ERRRRRROR", e)
  }
}
refreshHCEMap() {
  this.api.getCardsInfo(1).subscribe(data => {
    this.cardsinfo = data;

    for(let i = 0; i < data.length; i++)
    {
      this.hceMap.set(this.userinfo[i].user_id, this.userinfo[i].lbo);
    }
  })
}
}
