import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DOCUMENT } from '@angular/common'; 
import { Inject }  from '@angular/core';

@Component({
  selector: 'app-verhc',
  templateUrl: './verhc.component.html',
  styleUrls: ['./verhc.component.css']
})
export class VerhcComponent {

  requests$!:Observable<any[]>;
  healthcards$!:Observable<any[]>;
  usersList$!:Observable<any[]>;

constructor( private api: ApiService, @Inject(DOCUMENT) document: Document){}

  @Input() requests:any;
  @Input() healthcards:any;
  user_id:number;
  date_verification_hc:string = "";
  date_expiration_hc:string = "";

  ngOnInit(): void {
    this.user_id = this.requests.userid;
    this.requests$! = this.api.getReguests();
    this.healthcards$! = this.api.getCards();
  }

  overiHCards(p:number) {
    var cards = {
      date_verification_hc:this.date_verification_hc,
      date_expiration_hc:this.date_expiration_hc,
      user_id:this.user_id,
    }
    this.api.updateCards(p,cards).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
}
