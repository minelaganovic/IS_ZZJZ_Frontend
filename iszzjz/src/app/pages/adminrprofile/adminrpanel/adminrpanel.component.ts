import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-adminrpanel',
  templateUrl: './adminrpanel.component.html',
  styleUrls: ['./adminrpanel.component.css']
})
export class AdminrpanelComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      //da navbar prelazi preko stranice
      styleClass = 'adminpan-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'adminpan-md-screen'
    }
    return styleClass;
  }
}
