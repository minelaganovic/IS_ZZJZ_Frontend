import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { hceApiService } from 'src/app/services/hce-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  usersList$!:Observable<any[]>;
  hceList:any=[];

  constructor(private service:hceApiService) { }

  ngOnInit(): void {
    this.usersList$= this.service.getUserList();
  }
  delete(item:any) {
    if(confirm(`Da li stvarno zelite da obrisete korisnika ${item.firstName}`)) {
      this.service.deleteUser(item.id).subscribe(res => {

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.usersList$ = this.service.getUserList();
      })
    }
  }

}
