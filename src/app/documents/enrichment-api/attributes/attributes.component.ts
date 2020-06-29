import { Component, OnInit } from '@angular/core';
import { attributesOneExample, attributesOne, attributesSecondExample, attributesSecond } from '../../csv-for-doc/enrichment-api';
import { Router, ActivatedRoute } from '@angular/router';
import { descoveryAttributesExample, descoveryAttributes } from '../../csv-for-doc/descovery-api';
import { revealAttributes, revealAttributesExample } from '../../csv-for-doc/reveal-api';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class AttributesComponent implements OnInit {
  displayedColumns=['attribute','description']
  type: any;
  dataSource: any=[];
  errorExaxmple:any=[]
  constructor(private route:ActivatedRoute,private router:Router) { 
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.type = params["type"];
      })
      console.log(this.type)
      if(this.type==='person-api'){
        this.errorExaxmple=attributesOneExample
        this.dataSource=attributesOne
      }
      if(this.type==='company-api'){
        this.errorExaxmple=attributesSecondExample
        this.dataSource=attributesSecond
      }
      if(this.type==='discovery'){
        this.errorExaxmple=descoveryAttributesExample
        this.dataSource=descoveryAttributes
      }
      if(this.type==='reveal'){
        this.errorExaxmple=revealAttributesExample
        this.dataSource=revealAttributes
      }
      if(this.type==='calculate-risk'){
        console.log("comming")
      }
  
    })
  }

  ngOnInit() {
  }

}
