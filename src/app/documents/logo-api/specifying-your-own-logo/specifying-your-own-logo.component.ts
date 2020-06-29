import { Component, OnInit } from '@angular/core';
import {yourOwnLogoExample } from '../../csv-for-doc/logo-api';

@Component({
  selector: 'app-specifying-your-own-logo',
  templateUrl: './specifying-your-own-logo.component.html',
  styleUrls: ['./specifying-your-own-logo.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class SpecifyingYourOwnLogoComponent implements OnInit {
  ownImageExample=yourOwnLogoExample
  constructor() { }

  ngOnInit() {
  }

}
