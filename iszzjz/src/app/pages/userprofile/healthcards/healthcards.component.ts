import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
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
ngOnInit(): void {
  try {

    this.store.getUserInfoFromStore()
    .subscribe(val =>{
     let infU:[] =this.auth.getArrayUFromToken();
     this.userinfo= infU;
    })
    this.api.getCardsInfo(1)
    .subscribe(
      {
        next:(res)=>{
        this.cardsinfo=res;
      },
      error:(err)=>{
        this.toast.error({detail: "Predajte zahtev!", summary:"Nemate aktiviranu zdravstvenu knjižicu!", duration:5000})
        this.cardsinfo=null
      }})
  }
  catch(e){
    console.log("ERRRRRROR", e)
  }
 
}
}
