import { Component, OnInit } from '@angular/core';
import { HttpErrorType, httpErrorExample } from '../../csv-for-doc/http-status-code';

@Component({
  selector: 'app-error-type',
  templateUrl: './error-type.component.html',
  styleUrls: ['./error-type.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class ErrorTypeComponent implements OnInit {

  displayedColumns: string[] = [ 'type', 'description'];
  dataSource = HttpErrorType;
  errorExaxmple=httpErrorExample
  constructor() { }

  ngOnInit() {
  }

}