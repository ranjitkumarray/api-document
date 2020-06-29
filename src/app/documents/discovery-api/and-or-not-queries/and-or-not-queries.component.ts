import { Component, OnInit } from '@angular/core';
import { andOrNotQueriesExample, dataType, dataTypeExample, dataTypeForProtester, protesterDataTypeExample } from '../../csv-for-doc/descovery-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-and-or-not-queries',
  templateUrl: './and-or-not-queries.component.html',
  styleUrls: ['./and-or-not-queries.component.css','../../../documents/csv-for-doc/common-style.css']
})
export class AndOrNotQueriesComponent implements OnInit {
  dataType: any;
  dataTypeSource: any=[];
  andOrNotQueries:any;
  constructor(private route: ActivatedRoute,private router:Router) { 
    router.events.subscribe((val) =>{
      this.route.params.subscribe(params => {
        this.dataType = params["type"];
      })
      if(this.dataType==='discovery'){
        this.andOrNotQueries=andOrNotQueriesExample
      }
      if(this.dataType==='prospector'){
        this.andOrNotQueries=protesterDataTypeExample

      }
  
    })
  }
  ngOnInit() {
  }

}
