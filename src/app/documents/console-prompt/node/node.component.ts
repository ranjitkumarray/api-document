import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class NodeComponent implements OnInit {
  @Input()  node:any

  constructor() { }

  ngOnInit() {
  }

}
