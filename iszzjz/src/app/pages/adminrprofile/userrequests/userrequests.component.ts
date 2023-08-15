import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userrequests',
  templateUrl: './userrequests.component.html',
  styleUrls: ['./userrequests.component.css']
})
export class UserrequestsComponent implements OnInit {
  
public requests: any=[];
usersList$!:Observable<any[]>;
activateSave:boolean = false;
request: any=[];

constructor( private api: ApiService){}
ngOnInit(): void {
  this.usersList$= this.api.getUserList();

  this.api.getReguests()
  .subscribe(res=>
    {
      this.requests=res;
    })
}
public createImgPath = (serverPath: string) => { 
  return `http://dinella-001-site1.gtempurl.com/${serverPath}`; 
}

modalClose() {
  this.activateSave= false;
  this.api.getReguests()
  .subscribe(res=>
    {
      this.requests=res;
    })
}
delete(req:any) {
  if(confirm(`Da li stvarno zelite da obrisete`)) {
    this.api.deleteReq(req.id).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
    if(closeModalBtn) {
      closeModalBtn.click();
    }

    var showDeleteSuccess = document.getElementById('delete-success-alert');
    if(showDeleteSuccess) {
      showDeleteSuccess.style.display = "block";
    }
    setTimeout(function() {
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "none"
      }
    }, 4000);
    })
  }
}
modalSave(item:any) {
  this.request = item;
  this.activateSave=true;
}
}
