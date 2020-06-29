import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-image',
  templateUrl: './default-image.component.html',
  styleUrls: ['./default-image.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class DefaultImageComponent implements OnInit {
  urlExample:any=[]
  constructor() { }

  ngOnInit() {
  }

}
