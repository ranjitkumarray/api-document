import { Component, OnInit } from '@angular/core';
import { personAttributes } from '../../csv-for-doc/prospector-api';
import { urlExample } from '../../csv-for-doc/descovery-api';

@Component({
  selector: 'app-person-attributes',
  templateUrl: './person-attributes.component.html',
  styleUrls: ['./person-attributes.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class PersonAttributesComponent implements OnInit {
  displayedColumns=['attribute','description']
  personAttributesData=personAttributes
  urlExample=urlExample==null
  constructor() { }

  ngOnInit() {
  }

}
