import { Component, OnInit } from '@angular/core';
import { responseCode, urlExample } from '../../csv-for-doc/descovery-api';
import { autoCompleteHttpResponse, autoCompleteResponseCode } from '../../csv-for-doc/name-to-domain-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response-code',
  templateUrl: './response-code.component.html',
  styleUrls: ['./response-code.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class ResponseCodeComponent implements OnInit {
  dataForresponseCode:any=[]
  urlExample:any
  displayedColumns=['code','description']
  controlType: any;
  constructor(private route: ActivatedRoute,private router:Router) {
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.controlType = params["type"];
      })
      if(this.controlType==='discovery'){
        this.dataForresponseCode=responseCode
        this.urlExample=[]
      }
      if(this.controlType==='name-domain'){
        this.dataForresponseCode=autoCompleteResponseCode
        this.urlExample=[]
      }
  
    })
  }
  ngOnInit() {
  }

}
