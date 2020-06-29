import { Component, OnInit } from '@angular/core';
import { accessTokenExample } from '../../csv-for-doc/oauth';

@Component({
  selector: 'app-request-token',
  templateUrl: './request-token.component.html',
  styleUrls: ['./request-token.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class RequestTokenComponent implements OnInit {
  errorExaxmple=accessTokenExample==null

  constructor() { }

  ngOnInit() {
    
  }
}
