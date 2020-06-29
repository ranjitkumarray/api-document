import { Component, OnInit } from '@angular/core';
import { webhooksResponsePostBody, webhooksResponsePostBodyExample } from '../../csv-for-doc/webhooks';

@Component({
  selector: 'app-response-post-body',
  templateUrl: './response-post-body.component.html',
  styleUrls: ['./response-post-body.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class ResponsePostBodyComponent implements OnInit {
  displayedColumns: string[] = ['attribute','description'];
  dataSource = webhooksResponsePostBody;
  errorExaxmple=webhooksResponsePostBodyExample

  constructor() { }

  ngOnInit() {
    
  }
}