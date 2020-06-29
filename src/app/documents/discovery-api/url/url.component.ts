import { Component, OnInit } from '@angular/core';
import { urlExample } from '../../csv-for-doc/descovery-api';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class UrlComponent implements OnInit {
  urlExaxmple=urlExample
  constructor() { }

  ngOnInit() {
  }

}
