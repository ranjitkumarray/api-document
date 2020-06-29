import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { revealHttpGetParam, revealResponseType } from '../../csv-for-doc/reveal-api';

@Component({
  selector: 'app-http-get-parameters',
  templateUrl: './http-get-parameters.component.html',
  styleUrls: ['./http-get-parameters.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class HttpGetParametersComponent implements OnInit {
  controlType: any;
  dataOfProspectorHttpRequest:any=[];
  httpResponseType: any=[];
  displayedColumnsForResponseType=['code','description']
  displayedColumns=['param','description']
  constructor(private route: ActivatedRoute,private router:Router) {
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.controlType = params["type"];
      })
      if(this.controlType==='reveal-client-end-point'){
        this.dataOfProspectorHttpRequest = revealHttpGetParam;
        this.httpResponseType=revealResponseType
      }
  
    })
  }
  ngOnInit() {
  }

}
