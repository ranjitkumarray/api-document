import { Component, OnInit } from '@angular/core';
import { subscribeExample } from '../../csv-for-doc/enrichment-api';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class SubscribeComponent implements OnInit {
  subExaxmple=subscribeExample
  constructor() { }

  ngOnInit() {
  }

}
