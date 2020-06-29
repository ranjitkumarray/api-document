import { Component, OnInit } from '@angular/core';
import { httpGetParams, responseCode, combinedApiExample } from '../../csv-for-doc/enrichment-api';

@Component({
  selector: 'app-combined-api',
  templateUrl: './combined-api.component.html',
  styleUrls: ['./combined-api.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class CombinedApiComponent implements OnInit {

  displayedColumns=['param','description']
  displayedColumnsForHttpParam=['code','description']
  errorExaxmple=combinedApiExample
  dataSource=responseCode
  emailLookupData=httpGetParams
  constructor() { }

  ngOnInit() {
  }

}
