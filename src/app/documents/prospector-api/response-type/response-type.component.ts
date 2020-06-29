import { Component, OnInit } from '@angular/core';
import { responseTypeCode } from '../../csv-for-doc/prospector-api';
import { urlExample } from '../../csv-for-doc/descovery-api';

@Component({
  selector: 'app-response-type',
  templateUrl: './response-type.component.html',
  styleUrls: ['./response-type.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class ResponseTypeComponent implements OnInit {
  displayedColumns=['code','description']
  urlExample=urlExample==null
  responseCode=responseTypeCode
  constructor() { }

  ngOnInit() {
  }

}
