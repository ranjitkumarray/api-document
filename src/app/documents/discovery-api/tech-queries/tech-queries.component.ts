import { Component, OnInit } from '@angular/core';
import { techQueriesExample } from '../../csv-for-doc/descovery-api';

@Component({
  selector: 'app-tech-queries',
  templateUrl: './tech-queries.component.html',
  styleUrls: ['./tech-queries.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class TechQueriesComponent implements OnInit {
  techQueriesPrompt=techQueriesExample
  constructor() { }

  ngOnInit() {
  }

}
