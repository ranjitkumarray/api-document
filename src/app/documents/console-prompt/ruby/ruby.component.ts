import { Component, OnInit , ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-ruby',
  templateUrl: './ruby.component.html',
  styleUrls: ['./ruby.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class RubyComponent implements OnInit {
  @Input()  ruby:any

  constructor() { }

  ngOnInit() {
  }

}
