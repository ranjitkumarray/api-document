import { Component, OnInit } from '@angular/core';
import { versioning, versioningExample } from './../csv-for-doc/http-status-code';

@Component({
  selector: 'app-versioning',
  templateUrl: './versioning.component.html',
  styleUrls: ['./versioning.component.css','./../csv-for-doc/common-style.css']
})
export class VersioningComponent implements OnInit {

  displayedColumns: string[] = [ 'api', 'current_version'];
  dataSource = versioning;
  errorExaxmple=versioningExample
  constructor() { }

  ngOnInit() {
  }

}
