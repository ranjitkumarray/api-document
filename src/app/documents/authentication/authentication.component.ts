import { Component, OnInit } from '@angular/core';
import { authenticationExample } from './../csv-for-doc/http-status-code';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css','../../documents/csv-for-doc/common-style.css']
})
export class AuthenticationComponent implements OnInit {
  errorExaxmple=authenticationExample

  constructor() { }

  ngOnInit() {
  }

}
