import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { hceApiService } from 'src/app/services/hce-api.service';

@Component({
  selector: 'app-addguidance',
  templateUrl: './addguidance.component.html',
  styleUrls: ['./addguidance.component.css']
})
export class AddguidanceComponent {
  requests$!:Observable<any[]>;
  healthcards$!:Observable<any[]>;
  usersList$!:Observable<any[]>;
  hceList$!:Observable<any[]>;
  texpensesList$!:Observable<any[]>;

constructor( private api: ApiService,
  private service:hceApiService){}

  @Input() requests:any;
  @Input() healthcards:any;
  user_id:number;
  todaytdate:string = "";
  diseasecode:string = "";
  typetran:string = "";
  therapy:string = "";
  hce:null;
  texpenses:null;

  ngOnInit(): void {
    this.user_id = this.requests.userid;
    this.requests$! = this.api.getReguests();
    this.hceList$= this.service.getHCEList();
    this.usersList$= this.api.getUserList();
    this.texpensesList$= this.api.getTEList();
  }

  saveUput() {
    var uput = {
      today_date:this.todaytdate,
      disease_code:this.diseasecode,
      mode_of_transportation:this.typetran,
      therapy:this.therapy,
      user_id:this.user_id,
      te_id:this.texpenses,
      hc_id:this.hce
    }
    this.api.postUput(uput).subscribe(res => {
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
