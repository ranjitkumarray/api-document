import { Component, OnInit } from '@angular/core';
import { personSerchExample } from '../../csv-for-doc/prospector-api';
import { ActivatedRoute, Router } from '@angular/router';
import { httpRequestExample } from '../../csv-for-doc/logo-api';
import { autoComplateExample } from '../../csv-for-doc/auto-complete';
import { nameTpDomainAPIHttpRequestExample } from '../../csv-for-doc/name-to-domain-api';
import { revealHttpRequestExample } from '../../csv-for-doc/reveal-api';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class HttpRequestComponent implements OnInit {
  urlExample: any=[];
  controlType:any
  constructor(private route: ActivatedRoute,private router:Router) {
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.controlType = params["type"];
      })
      if(this.controlType==='prospector'){
        this.urlExample=personSerchExample;
      }
      if(this.controlType==='logo'){
        this.urlExample = httpRequestExample;
      }
      if(this.controlType==="autocomplete"){
        this.urlExample=autoComplateExample
      }
      if(this.controlType==="name-domain"){
        this.urlExample=nameTpDomainAPIHttpRequestExample
      }
      if(this.controlType==="reveal"){
        this.urlExample=revealHttpRequestExample
      }
  
    })
    
   }
  ngOnInit() {
  }

}
