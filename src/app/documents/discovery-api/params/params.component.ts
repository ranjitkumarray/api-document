import { Component, OnInit } from '@angular/core';
import { paramTwo, paramOne, urlExample, responseCode } from '../../csv-for-doc/descovery-api';
import { ActivatedRoute, Router } from '@angular/router';
import { autoCompleteHttpResponse, autoCompleteParams } from '../../csv-for-doc/name-to-domain-api';
import { revealHttpGetParamsOne, revealHttpGetParamsresponseType } from '../../csv-for-doc/reveal-api';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class ParamsComponent implements OnInit {
  dataForParamOne:any=[]
  dataForParamTwo:any=[]
  urlExaxmple=urlExample==null
  displayedColumns=['param','description']
  displayedColumnsForSecondTable=['code','description']
  controlType: any;
  constructor(private route: ActivatedRoute,private router:Router) {
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.controlType = params["type"];
      })
      if(this.controlType==='discovery'){
        this.dataForParamOne=paramOne
        this.dataForParamTwo=paramTwo
        this.urlExaxmple=urlExample==null
      }
      if(this.controlType==='name-domain'){
        this.dataForParamOne=autoCompleteParams
        this.urlExaxmple=urlExample==null
      }
      if(this.controlType==='reveal'){
        this.dataForParamOne=revealHttpGetParamsOne
        this.dataForParamTwo=revealHttpGetParamsresponseType
        this.urlExaxmple=urlExample==null
      }
    })

  }
  ngOnInit() {
  }

}
