import { Component, OnInit } from '@angular/core';
import { sorting, sortingExample } from '../../csv-for-doc/descovery-api';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class SortingComponent implements OnInit {
  dataForSorting=sorting
  sortingExample=sortingExample
  displayedColumns=['sort',"description"]
  constructor() { }

  ngOnInit() {
  }

}
