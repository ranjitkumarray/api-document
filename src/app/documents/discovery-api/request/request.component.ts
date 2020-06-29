import { Component, OnInit } from '@angular/core';
import { urlExample } from '../../csv-for-doc/descovery-api';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class RequestComponent implements OnInit {
  urlExaxmple=urlExample
  constructor() { }

  ngOnInit() {
  }

}
