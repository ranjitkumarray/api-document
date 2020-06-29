import { Component, OnInit } from '@angular/core';
import { fields, dataTypeExample, dataType, dataTypeForProtester, protesterDataTypeExample } from '../../csv-for-doc/descovery-api';
import { ActivatedRoute, Router } from '@angular/router';
import { prospectorFields } from '../../csv-for-doc/prospector-api';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class FieldsComponent implements OnInit {

  displayedColumns=['param','description']
  urlExaxmple:any=null
  dataType: any;
  dataTypeSource: any=[];
  fieldsSource: any=[];

  constructor(private route: ActivatedRoute,private router:Router) { 
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.dataType = params["type"];
      })
      if(this.dataType==='discovery'){
        this.fieldsSource=fields
      }
      if(this.dataType==='prospector'){
        this.fieldsSource = prospectorFields;

      }
  
    })
  }
  ngOnInit() {
  }

}
