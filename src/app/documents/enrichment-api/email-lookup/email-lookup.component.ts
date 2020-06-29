import { Component, OnInit } from '@angular/core';
import { httpGetParams, emailLookupExample, supportedParameters, responseCode } from '../../csv-for-doc/enrichment-api';

@Component({
  selector: 'app-email-lookup',
  templateUrl: './email-lookup.component.html',
  styleUrls: ['./email-lookup.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class EmailLookupComponent implements OnInit {
  displayedColumns=['param','description']
  displayedColumnsresponseCodes=['code','description']
  httpGetParams=httpGetParams
  errorExaxmple=emailLookupExample
  dataSource=supportedParameters
  responseCodes=responseCode
  constructor() { }

  ngOnInit() {
  }

}
