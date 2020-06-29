import { Component, OnInit } from '@angular/core';
import { paginationExample } from '../../csv-for-doc/descovery-api';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class PaginationComponent implements OnInit {
  paginationExaxmple=paginationExample
  constructor() { }

  ngOnInit() {
  }

}
