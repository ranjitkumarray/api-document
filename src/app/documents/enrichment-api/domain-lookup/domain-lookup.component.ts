import { Component, OnInit } from '@angular/core';
import { domainLookup, domainLookupExample, domainHttpGetParams, domainResponseType } from '../../csv-for-doc/enrichment-api';

@Component({
  selector: 'app-domain-lookup',
  templateUrl: './domain-lookup.component.html',
  styleUrls: ['./domain-lookup.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class DomainLookupComponent implements OnInit {
  displayedColumnsForDomainLookUp=['param','description']
  displayedColumnsResponseType=['code','description']
  domainLookUpData=domainLookup
  domainPromptData=domainLookupExample
  httpGetParams=domainHttpGetParams
  responseType=domainResponseType
  constructor() { }

  ngOnInit() {
  }

}
