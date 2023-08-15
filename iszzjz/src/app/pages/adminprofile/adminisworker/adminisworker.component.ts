import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { hceApiService } from 'src/app/services/hce-api.service';


@Component({
  selector: 'app-adminisworker',
  templateUrl: './adminisworker.component.html',
  styleUrls: ['./adminisworker.component.css']
})
export class AdminisworkerComponent {

  aworkerList$!:Observable<any[]>;
  activateAddAWComp:boolean = false;
  aworker:any;

  constructor(private service:hceApiService) { }

  ngOnInit(): void {
    this.aworkerList$= this.service.getAdminworkerList();
  }
  
  modalAddAW() {
    this.aworker= {
      id:0,
      firstName:null,
      lastName:null,
      email:null,
      password:null
    }
    this.activateAddAWComp = true;
  }
  modalClose() {
    this.activateAddAWComp = false;
    this.aworkerList$= this.service.getAdminworkerList();
  }
  delete(item:any) {
    if(confirm(`Da li stvarno zelite da obrisete korisnika ${item.firstName}`)) {
      this.service.deleteAdminworker(item.id).subscribe(res => {

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.aworkerList$ = this.service.getAdminworkerList();
      })
    }
  }

}
