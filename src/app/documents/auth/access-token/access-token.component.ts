import { Component, OnInit } from '@angular/core';
import { accessTokenExample } from '../../csv-for-doc/oauth';

@Component({
  selector: 'app-access-token',
  templateUrl: './access-token.component.html',
  styleUrls: ['./access-token.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class AccessTokenComponent implements OnInit {
  displayedColumns: string[] = ['parameter','description'];
  errorExaxmple=accessTokenExample

  constructor() { }

  ngOnInit() {
  }

}
