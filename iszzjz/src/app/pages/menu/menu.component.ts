import { Component, OnInit } from '@angular/core';
import { ServiceDetailsService } from 'src/app/services/service-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:ServiceDetailsService) { }
  sData:any;
  ngOnInit(): void {
    this.sData = this.service.servicesDetails;
  }

  

}
