import { Component, OnInit } from '@angular/core';
import { accessTokenExample, queryParamOne,queryParamTwo } from '../../csv-for-doc/oauth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class QueryParamsComponent implements OnInit {
  displayedColumns: string[] = ['parameter','description'];
  
  errorExaxmple=accessTokenExample==null
  paramId: any;
  dataSource: any=[];
  constructor(private route: ActivatedRoute,private router:Router) {
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.paramId = params["id"];
      })
      if(this.paramId==='1'){
        this.dataSource = queryParamOne;
      }
      if(this.paramId==='2'){
        this.dataSource = queryParamTwo;
      }
  
    })
    
   }
  ngOnInit() {}

}
