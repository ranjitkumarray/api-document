import { Component, OnInit } from '@angular/core';
import { dataType, dataTypeExample, dataTypeForProtester, protesterDataTypeExample } from '../../csv-for-doc/descovery-api';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-data-type',
  templateUrl: './data-type.component.html',
  styleUrls: ['./data-type.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class DataTypeComponent implements OnInit {
  dataType: any;
  displayedColumns=['type','description']
  dataSource: any=[];
  dataTypeSource: any=[];
  urlExaxmple: any;
  constructor(private route: ActivatedRoute,private router:Router) { 
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.dataType = params["type"];
      })
      if(this.dataType==='discovery'){
        this.dataTypeSource=dataType
        this.urlExaxmple=dataTypeExample
      }
      if(this.dataType==='prospector'){
        this.dataTypeSource = dataTypeForProtester;
        this.urlExaxmple=protesterDataTypeExample

      }
  
    })
  }
    
  ngOnInit() {
  }

}
