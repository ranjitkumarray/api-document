import { Component, OnInit } from '@angular/core';
import {HttpStatusCode, httpErrorExample} from '../../csv-for-doc/http-status-code' 
@Component({
  selector: 'app-http-status-code',
  templateUrl: './http-status-code.component.html',
  styleUrls: ['./http-status-code.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class HttpStatusCodeComponent implements OnInit {
  displayedColumns: string[] = ['code', 'title', 'description'];
  dataSource = HttpStatusCode;
  errorExaxmple=httpErrorExample===null

  constructor() { }

  ngOnInit() {
    
  }

}
