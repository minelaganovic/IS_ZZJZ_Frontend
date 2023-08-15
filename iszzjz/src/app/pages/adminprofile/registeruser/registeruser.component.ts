import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { hceApiService } from 'src/app/services/hce-api.service';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent {

  usersList$!:Observable<any[]>;

  constructor(private service:hceApiService) { }

  @Input() user:any;
  id: number = 0;
  status: string = "odobreno";

  ngOnInit(): void {
    this.usersList$= this.service.getregisterUserList();
  }

  updateusser(id:string) {
    var user = {
      id:this.id,
      status:this.status,
    }
    this.service.updateUser(id,user).subscribe(res => {
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
      this.usersList$ = this.service.getregisterUserList();
    })
  }

  delete(item:any) {
    if(confirm(`Da li stvarno zelite da odbijete korisnika ${item.firstName}`)) {
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
      this.usersList$ = this.service.getregisterUserList();
      })
    }
  }
}
