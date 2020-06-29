import { Component, OnInit } from '@angular/core';
import { riskJavaScriptLibraryExample } from '../../csv-for-doc/risk-api';

@Component({
  selector: 'app-javascript-library',
  templateUrl: './javascript-library.component.html',
  styleUrls: ['./javascript-library.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class JavascriptLibraryComponent implements OnInit {
  riskJavaScriptExample=riskJavaScriptLibraryExample
  constructor() { 
    console.log(this.riskJavaScriptExample)
  }

  ngOnInit() {
  }

}
