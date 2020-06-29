import { Component, OnInit , ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-pthon',
  templateUrl: './pthon.component.html',
  styleUrls: ['./pthon.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class PthonComponent implements OnInit {
  @Input()  python:any

  constructor() { }

  ngOnInit() {
  }

}
