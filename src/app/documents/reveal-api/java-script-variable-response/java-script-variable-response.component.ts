import { Component, OnInit } from '@angular/core';
import { javaScriptVariableResponseExample } from '../../csv-for-doc/reveal-api';

@Component({
  selector: 'app-java-script-variable-response',
  templateUrl: './java-script-variable-response.component.html',
  styleUrls: ['./java-script-variable-response.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class JavaScriptVariableResponseComponent implements OnInit {
  revealJsonResponseExample=javaScriptVariableResponseExample
  constructor() { }

  ngOnInit() {
  }

}
