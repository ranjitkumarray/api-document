import { Component, OnInit } from '@angular/core';
import { streamingExample } from '../csv-for-doc/streaming';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css','../../documents/csv-for-doc/common-style.css']
})
export class StreamingComponent implements OnInit {
  streaming=streamingExample

  constructor() { }

  ngOnInit() {
    
  }


}
