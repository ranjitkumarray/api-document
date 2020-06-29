import { Component, OnInit } from '@angular/core';
import { revealJsonResponseExample } from '../../csv-for-doc/reveal-api';

@Component({
  selector: 'app-json-response',
  templateUrl: './json-response.component.html',
  styleUrls: ['./json-response.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class JsonResponseComponent implements OnInit {
  revealJsonResponseExample=revealJsonResponseExample
  constructor() { }

  ngOnInit() {
  }

}
