import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDetailsService } from 'src/app/services/service-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:ServiceDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.servicesDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }

}
