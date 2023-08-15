import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './navlink';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';
interface sidenavtoggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-dashnava',
  templateUrl: './dashnava.component.html',
  styleUrls: ['./dashnava.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ],
})
export class DashnavaComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<sidenavtoggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  public userinfo:string[]=[];
  constructor( private auth: AuthService, private store: UserstoreService){
  
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
      this.store.getUserInfoFromStore()
      .subscribe(val =>{
       let infU:[] =this.auth.getArrayUFromToken();
       this.userinfo= infU;
      })
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
