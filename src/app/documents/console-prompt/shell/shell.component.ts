import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class ShellComponent implements OnInit {
  @Input()  shell:any

  constructor() { }

  ngOnInit() {
  }

}
