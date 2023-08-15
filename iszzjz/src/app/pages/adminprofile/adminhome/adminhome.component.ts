import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;
  public role:string;
  constructor( private auth: AuthService, private ustore: UserstoreService){
  }
  ngOnInit(): void {
    this.ustore.getRoleFromStore()
  .subscribe(val=>{
    const role= this.auth.getRoleFromToken();
    this.role=val|| role;
  })
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
 
}
