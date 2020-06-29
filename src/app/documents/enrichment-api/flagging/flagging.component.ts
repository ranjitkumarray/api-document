import { Component, OnInit } from '@angular/core';
import { flagingExample, flaging, responseType, flagingTwoExample, flagingTwo } from '../../csv-for-doc/enrichment-api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flagging',
  templateUrl: './flagging.component.html',
  styleUrls: ['./flagging.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class FlaggingComponent implements OnInit {
  displayedColumnsForFlaging=['param',"description"]
  displayedColumnsResponseType=['code',"description"]

  flagType: any;
  responseCodeType: any=[];
  flagingPromptData: any=[]
  flags: any=[];
  constructor(private router:Router,private route:ActivatedRoute) { 
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.flagType = params["type"];
      })
      if(this.flagType==='person-api'){
        this.flagingPromptData=flagingExample
        this.responseCodeType=flaging
        this.flags=responseType
      }
      if(this.flagType==='company-api'){
        this.flagingPromptData=flagingTwoExample
        this.responseCodeType=flagingTwo
        this.flags=responseType
      }
  
    })
  }

  ngOnInit() {
  }

}
