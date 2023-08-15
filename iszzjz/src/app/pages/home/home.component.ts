import { Component, OnInit } from '@angular/core';
import { ServiceDetailsService } from 'src/app/services/service-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceDetailsService) { }
  servicesData:any;
  ngOnInit(): void {
    this.servicesData = this.service.servicesDetails;
  }

}
