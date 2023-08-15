import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { hceApiService } from 'src/app/services/hce-api.service';
@Component({
  selector: 'app-add-edit-hce',
  templateUrl: './add-edit-hce.component.html',
  styleUrls: ['./add-edit-hce.component.css']
})
export class AddEditHceComponent {

  hceList$!: Observable<any[]>;

  constructor(private service: hceApiService) { }

  @Input() hcemployee:any;
  id_hce: number = 0;
  name_hce: string = "";
  city_hce: string = "";
  flname_doctor:string = "";

  ngOnInit(): void {
    this.id_hce = this.hcemployee.id_hce;
    this.name_hce = this.hcemployee.name_hce;
    this.city_hce = this.hcemployee.city_hce;
    this.flname_doctor=this.hcemployee.flname_doctor
    this.hceList$ = this.service.getHCEList();
  }

  addHCEmployee() {
    var hcemployee = {
      name_hce:this.name_hce,
      city_hce: this.city_hce,
     flname_doctor:this.flname_doctor
    }

    this.service.addHCE(hcemployee).subscribe(res => {
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
      this.hceList$ = this.service.getHCEList();
    })
  }

  updateHCEmployee() {
    var hcemployee = {
      id_hce:this.id_hce,
      name_hce:this.name_hce,
      city_hce: this.city_hce,
     flname_doctor:this.flname_doctor
    }
    var id_hce:number = this.id_hce;
    this.service.updateHCE(id_hce,hcemployee).subscribe(res => {
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
