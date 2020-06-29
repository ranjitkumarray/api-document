import { Component, OnInit } from '@angular/core';
import { responseBody, responseBodyExample, personSerchExample } from '../../csv-for-doc/prospector-api';
import { ActivatedRoute, Router } from '@angular/router';
import { httpRequestExample } from '../../csv-for-doc/logo-api';
import { autoComplateExample, autoComplateResponse } from '../../csv-for-doc/auto-complete';
import { autoCompleteHttpResponse } from '../../csv-for-doc/name-to-domain-api';

@Component({
  selector: 'app-response-body',
  templateUrl: './response-body.component.html',
  styleUrls: ['./response-body.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class ResponseBodyComponent implements OnInit {
  displayedColumns=['name','description']
  responseBodyType:any=[]
  responseBodySource:any=[]
  controlType: any;
  constructor(private route: ActivatedRoute,private router:Router) {
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.controlType = params["type"];
      })
      if(this.controlType==='prospector'){
        this.responseBodyType=responseBody
        this.responseBodySource=responseBodyExample
      }
      if(this.controlType==="autocomplete"){
        this.responseBodyType=autoComplateResponse
        this.responseBodySource=[]
      }
      if(this.controlType==="name-domain"){
        this.responseBodyType=autoCompleteHttpResponse
        this.responseBodySource=[]
      }
  
    })
    
   }
  ngOnInit() {
  }

}
