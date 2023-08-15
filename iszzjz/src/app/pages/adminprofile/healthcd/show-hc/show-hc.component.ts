import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { hceApiService } from 'src/app/services/hce-api.service';

@Component({
  selector: 'app-show-hc',
  templateUrl: './show-hc.component.html',
  styleUrls: ['./show-hc.component.css']
})
export class ShowHcComponent {

  hceList$!:Observable<any[]>;
  hceList:any=[];

  // Map to display data associate with foreign keys
  hceMap:Map<number, string> = new Map()

  constructor(private service:hceApiService) { }

  ngOnInit(): void {
    this.hceList$= this.service.getHCEList();
    this.refreshHCEMap();
  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddEditHCEComponent:boolean = false;
  hcemployee:any;

  modalAdd() {
    this.hcemployee = {
      id_hce:0,
      name_hce:null,
      city_hce:null,
      flname_doctor:null
    }
    this.modalTitle = "Dodaj zdravstveni centar i zaposlene";
    this.activateAddEditHCEComponent = true;
  }

  modalEdit(item:any) {
    this.hcemployee = item;
    this.modalTitle = "Izmeni zdravstveni centar";
    this.activateAddEditHCEComponent = true;
  }

  delete(item:any) {
    if(confirm(`Da li stvarno zelite da obrisete ${item.name_hce}`)) {
      this.service.deleteHCE(item.id_hce).subscribe(res => {
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
      this.hceList$ = this.service.getHCEList();
      })
    }
  }

  modalClose() {
    this.activateAddEditHCEComponent = false;
    this.hceList$ = this.service.getHCEList();
  }
  refreshHCEMap() {
    this.service.getHCEList().subscribe(data => {
      this.hceList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.hceMap.set(this.hceList[i].id_hce, this.hceList[i].name_hce);
      }
    })
  }
}
