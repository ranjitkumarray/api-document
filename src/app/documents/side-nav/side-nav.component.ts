import { Component, OnInit, Inject } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  title = 'project-doc';
  opened :boolean=false;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  value="accent"
  deviceInfo: any;
  moblieIcon: boolean = false;
  isMobile: boolean;
  constructor (private deviceService: Ng2DeviceService,
   private router:Router
    ){} 
  ngOnInit(){
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
    if (this.deviceInfo.device === "android" || this.deviceInfo.device === 'ipad' || this.deviceInfo.device === 'iphone') {
      this.opened = false
    } else {
      this.opened = true
    }
    console.log("device ==>", this.opened, this.deviceInfo.device)

  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  openTab(){
  }
  goBackToHome(){
    this.router.navigate(['/api-doc/api-referrance'])
  }
}