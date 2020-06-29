import { Component, OnInit } from '@angular/core';
import { securingWebhooks, webhooksResponsePostBodyExample } from '../../csv-for-doc/webhooks';

@Component({
  selector: 'app-securing-webhooks',
  templateUrl: './securing-webhooks.component.html',
  styleUrls: ['./securing-webhooks.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class SecuringWebhooksComponent implements OnInit {
  displayedColumns: string[] = ['header','name'];
  dataSource = securingWebhooks;
  errorExaxmple=webhooksResponsePostBodyExample==null

  constructor() { }

  ngOnInit() {
    
  }

}
