import { Component, OnInit } from '@angular/core';
import { prospectorHttpRequest, personSerchExample } from '../../csv-for-doc/prospector-api';
import { ActivatedRoute, Router } from '@angular/router';
import {logoHttpGetParam } from '../../csv-for-doc/logo-api';
import { revealHttpGetParam } from '../../csv-for-doc/reveal-api';

@Component({
  selector: 'app-http-get-params',
  templateUrl: './http-get-params.component.html',
  styleUrls: ['./http-get-params.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class HttpGetParamsComponent implements OnInit {
  displayedColumns=['param','description']
  dataOfProspectorHttpRequest:any=[]
  urlExample:any=[]
  controlType: any;
  constructor(private route: ActivatedRoute,private router:Router) {
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.controlType = params["type"];
      })
      if(this.controlType==='prospector'){
        this.dataOfProspectorHttpRequest= prospectorHttpRequest
      }
      if(this.controlType==='logo'){
        this.dataOfProspectorHttpRequest = logoHttpGetParam;
      }  
    })
  }
  ngOnInit() {
  }

}
