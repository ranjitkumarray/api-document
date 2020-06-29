import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class QueriesComponent implements OnInit {
  @Input()  type:any
    constructor() { }

  ngOnInit() {
  }

}
