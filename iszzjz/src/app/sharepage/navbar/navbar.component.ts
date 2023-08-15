import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loggedin(){
    return localStorage.getItem('token');
  }
  onLogout(){
    localStorage.removeItem('token');
  }
}
