import { Component, OnInit } from '@angular/core';
import { reatingLimit, reatingLimitExample } from './../csv-for-doc/http-status-code';

@Component({
  selector: 'app-rate-limit',
  templateUrl: './rate-limit.component.html',
  styleUrls: ['./rate-limit.component.css','./../csv-for-doc/common-style.css']
})
export class RateLimitComponent implements OnInit {
  displayedColumns: string[] = [ 'header', 'name'];
  dataSource = reatingLimit;
  errorExaxmple=reatingLimitExample
  constructor() { }

  ngOnInit() {
  }

}
