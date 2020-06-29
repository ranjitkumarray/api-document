import { Component, OnInit } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';
import { HttpErrorType, httpErrorExample } from './../csv-for-doc/http-status-code';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','../../documents/csv-for-doc/common-style.css']
})
export class DashboardComponent implements OnInit {
  errorExaxmple=httpErrorExample===null

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
  constructor (private deviceService: Ng2DeviceService
    ){}
  ngOnInit(){
    this.deviceInfo = this.deviceService.getDeviceInfo();
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
}