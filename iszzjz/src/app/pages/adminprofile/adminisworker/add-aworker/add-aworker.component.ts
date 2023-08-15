import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { hceApiService } from 'src/app/services/hce-api.service';

@Component({
  selector: 'app-add-aworker',
  templateUrl: './add-aworker.component.html',
  styleUrls: ['./add-aworker.component.css']
})
export class AddAworkerComponent {

  aworkerList$!: Observable<any[]>;

  constructor(private service:hceApiService) { }

  @Input() aworker:any;
  id: number = 0;
  firstName: string = "";
  lastName: string = "";
  email:string = "";
  pwd:string="";

  ngOnInit(): void {
    //this.id=this.aworker.id;
    //this.firstName=this.aworker.firstName;
    //this.lastName=this.aworker.lastName;
    //this.email=this.aworker.email;
    //this.password=this.aworker.password;
    
    this.aworkerList$= this.service.getAdminworkerList();
  }

  addAW() {
    var aworkers = {
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      pwd:this.pwd
    }

    this.service.addaworker(aworkers).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
      this.aworkerList$= this.service.getAdminworkerList();
    })
  }

}
