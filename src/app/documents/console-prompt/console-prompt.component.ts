import { Component, OnInit ,Input} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-console-prompt',
  templateUrl: './console-prompt.component.html',
  styleUrls: ['./console-prompt.component.css'],
})
export class ConsolePromptComponent implements OnInit {
  @Input()  protoType:any
  constructor() { 
    
  }

  ngOnInit() {
    if(this.protoType!=undefined || this.protoType!=null){
    }
  }
  changecode(nameOfTabClicked){
    
  }
}
