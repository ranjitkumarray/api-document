import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component';
import { ApiReferenceComponent } from './api-reference/api-reference.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HttpStatusCodeComponent } from './error/http-status-code/http-status-code.component';
import { ErrorTypeComponent } from './error/error-type/error-type.component';
import { RateLimitComponent } from './rate-limit/rate-limit.component';
import { VersioningComponent } from './versioning/versioning.component';
import { ResponsePostBodyComponent } from './webhooks/response-post-body/response-post-body.component';
import { SecuringWebhooksComponent } from './webhooks/securing-webhooks/securing-webhooks.component';
import { StreamingComponent } from './streaming/streaming.component';
import { AuthComponent } from './auth/auth.component';
import { RequestTokenComponent } from './auth/request-token/request-token.component';
import { QueryParamsComponent } from './auth/query-params/query-params.component';
import { AccessTokenComponent } from './auth/access-token/access-token.component';
import { CombinedApiComponent } from './enrichment-api/combined-api/combined-api.component';
import { PersonApiComponent } from './enrichment-api/person-api/person-api.component';
import { AttributesComponent } from './enrichment-api/attributes/attributes.component';
import { EmailLookupComponent } from './enrichment-api/email-lookup/email-lookup.component';
import { SubscribeComponent } from './enrichment-api/subscribe/subscribe.component';
import { FlaggingComponent } from './enrichment-api/flagging/flagging.component';
import { CompanyApiComponent } from './enrichment-api/company-api/company-api.component';
import { DomainLookupComponent } from './enrichment-api/domain-lookup/domain-lookup.component';
import { RequestComponent } from './discovery-api/request/request.component';
import { UrlComponent } from './discovery-api/url/url.component';
import { ResponseCodeComponent } from './discovery-api/response-code/response-code.component';
import { ParamsComponent } from './discovery-api/params/params.component';
import { PaginationComponent } from './discovery-api/pagination/pagination.component';
import { SortingComponent } from './discovery-api/sorting/sorting.component';
import { QueriesComponent } from './discovery-api/queries/queries.component';
import { DataTypeComponent } from './discovery-api/data-type/data-type.component';
import { FieldsComponent } from './discovery-api/fields/fields.component';
import { AndOrNotQueriesComponent } from './discovery-api/and-or-not-queries/and-or-not-queries.component';
import { TechQueriesComponent } from './discovery-api/tech-queries/tech-queries.component';
import { HttpRequestComponent } from './prospector-api/http-request/http-request.component';
import { ResponseTypeComponent } from './prospector-api/response-type/response-type.component';
import { ResponseBodyComponent } from './prospector-api/response-body/response-body.component';
import { PersonAttributesComponent } from './prospector-api/person-attributes/person-attributes.component';
import { JavascriptLibraryComponent } from './risk-api/javascript-library/javascript-library.component';
import { PersonSearchComponent } from './prospector-api/person-search/person-search.component';
import { HttpGetParamsComponent } from './prospector-api/http-get-params/http-get-params.component';
import { DefaultImageComponent } from './logo-api/default-image/default-image.component';
import { SpecifyingYourOwnLogoComponent } from './logo-api/specifying-your-own-logo/specifying-your-own-logo.component';
import { HttpGetParametersComponent } from './reveal-api/http-get-parameters/http-get-parameters.component';
import { JsonResponseComponent } from './reveal-api/json-response/json-response.component';
import { JavaScriptVariableResponseComponent } from './reveal-api/java-script-variable-response/java-script-variable-response.component';
import { HttpPostParamsComponent } from './risk-api/http-post-params/http-post-params.component';
const routes: Routes = [
  
  { path: '',
  component:DocumentsComponent,
  children:[{
    path:"api-referrance",
    component:DashboardComponent,
    pathMatch:"full"

  },
  {
    path:"authentication",
    component:AuthenticationComponent,
    pathMatch:"full"
  },
  {path:"error",
    children:[{
    path:"httpStatus",component:HttpStatusCodeComponent,pathMatch:"full"
  },
  {
    path:"errorType",component:ErrorTypeComponent,pathMatch:"full"
  }]
},
{
  path:"rate-limit",
  component:RateLimitComponent,
  pathMatch:"full"
},
{
  path:"versioning",
  component:VersioningComponent,
  pathMatch:"full"
},
{
  path:"webhooks",
  children:[{
    path:"response-post-body",
    component:ResponsePostBodyComponent,
    pathMatch:"full"
  },
  {
    path:"securing-webhooks",
    component:SecuringWebhooksComponent,
    pathMatch:"full"
  }
]
},
{
  path:"streaming",
  component:StreamingComponent,
  pathMatch:"full"
},
{
  path:"auth",
  children:[
    {
      path:"request-token",
      component:RequestTokenComponent,
      pathMatch:"full"
    },
    {
      path:"qury-params/:id",
      component:QueryParamsComponent,
      pathMatch:"full"
    },
    {
      path:"access-token",
      component:AccessTokenComponent,
      pathMatch:"full"
    }
  ]
},
{
  path:"enrichment-api",
  children:[
    {
      path:"combined-api",
      component:CombinedApiComponent,
      pathMatch:"full"
    },
    {
      path:"person-api",
      component:PersonApiComponent,
      pathMatch:"full"
    },
    {
      path:"attributes/:type",
      component:AttributesComponent,
      pathMatch:"full"
    },
    {
      path:"email-lookup",
      component:EmailLookupComponent,
      pathMatch:"full"
    },
    {
      path:"subscribe",
      component:SubscribeComponent,
      pathMatch:"full"
    },
    {
      path:"flagging/:type",
      component:FlaggingComponent,
      pathMatch:"full"
    },
    {
      path:"company-api",
      component:CompanyApiComponent,
      pathMatch:"full"
    },
    {
      path:"attributes",
      component:AttributesComponent,
      pathMatch:"full"
    },
    {
      path:"domain-lookup",
      component:DomainLookupComponent,
      pathMatch:"full"
    },
    {
      path:"flagging",
      component:FlaggingComponent,
      pathMatch:"full"
    }
  ]
},
{
  path:"discovery-api",
  children:[
    {
      path:"attrbutes/:type",
      component:AttributesComponent,
      pathMatch:"full"
    },
    {
      path:"request",
      component:RequestComponent,
      pathMatch:"full"
    },
    {
      path:"url",
      component:UrlComponent,
      pathMatch:"full"
    },
    {
      path:"response-code/:type",
      component:ResponseCodeComponent,
      pathMatch:"full"
    },
    {
      path:"params/:type",
      component:ParamsComponent,
      pathMatch:"full"
    },
    {
      path:"pagination",
      component:PaginationComponent,
      pathMatch:"full"
    },
    {
      path:"sorting",
      component:SortingComponent,
      pathMatch:"full"
    },
    {
      path:"queries",
      component:QueriesComponent,
      pathMatch:"full"
    },
    {
      path:"data-type/:type",
      component:DataTypeComponent,
      pathMatch:"full"
    },
    {
      path:"fileds/:type",
      component:FieldsComponent,
      pathMatch:"full"
    },
    {
      path:"and-or-not-queries/:type",
      component:AndOrNotQueriesComponent,
      pathMatch:"full"
    },
    {
      path:"tech-queries",
      component:TechQueriesComponent,
      pathMatch:"full"
    }
  ]
},
{
  path:"Prospector",
  children:[
    {
      path:"person-search",
      component:PersonSearchComponent,
      pathMatch:"full"
    },
    {
      path:"http-request/:type",
      component:HttpRequestComponent,
      pathMatch:"full"
    },
    {
      path:"http-get-params/:type",
      component:HttpGetParamsComponent,
      pathMatch:"full"
    },
    {
      path:"response-type",
      component:ResponseTypeComponent,
      pathMatch:"full"
    },
    {
      path:"response-body/:type",
      component:ResponseBodyComponent,
      pathMatch:"full"
    },
    {
      path:"person-attributes",
      component:PersonAttributesComponent,
      pathMatch:"full"
    },
    {
      path:"queries",
      component:QueriesComponent,
      pathMatch:"full"
    },
    {
      path:"data-type/:type",
      component:DataTypeComponent,
      pathMatch:"full"
    },
    {
      path:"fields/:type",
      component:FieldsComponent,
      pathMatch:"full"
    },
    {
      path:"and-or-not-queries/:type",
      component:AndOrNotQueriesComponent,
      pathMatch:"full"
    }
  ]
},
{
  path:"risk-api",
  children:[
    {
      path:"javascript-library",
      component:JavascriptLibraryComponent,
      pathMatch:"full"
    },
    {
      path:"calculate-score",
      children:[
        {
          path:"attributes/:type",
          component:AttributesComponent,
          pathMatch:"full"
        },
        {
          path:"http-request/:type",
          component:HttpRequestComponent,
          pathMatch:"full"
        },
        {
          path:"http-post-param/:type",
          component:HttpPostParamsComponent,
          pathMatch:"full"
        }
      ]
    },
    {
      path:"flagging",
      children:[
        {
          path:"http-request/:type",
          component:HttpRequestComponent,
          pathMatch:"full"
        },
        {
          path:"http-post-param/:type",
          component:HttpPostParamsComponent,
          pathMatch:"full"
        }
      ]
    }
  ]
},
{
  path:"logo",
  children:[
    {
      path:"http-request/:type",
      component:HttpRequestComponent
    },
    {
      path:"http-get-params/:type",
      component:HttpGetParamsComponent,
      pathMatch:"full"
    },
    {
      path:"default-image",
      component:DefaultImageComponent,
      pathMatch:"full"
    },
    {
      path:"your-own-image",
      component:SpecifyingYourOwnLogoComponent,
      pathMatch:"full"
    }
  ]
},
{
  path:"autocomplete",
  children:[
    {
      path:"http-request/:type",
      component:HttpRequestComponent
    },
    {
      path:"http-response/:type",
      component:ResponseBodyComponent,
      pathMatch:"full"
    }
  ]
},
{
  path:"name-domain-api",
  children:[
    {
      path:"http-request/:type",
      component:HttpRequestComponent
    },
    {
      path:"http-response/:type",
      component:ResponseBodyComponent,
      pathMatch:"full"
    },
    {
      path:"response-code/:type",
      component:ResponseCodeComponent
    },
    {
      path:"param/:type",
      component:ParamsComponent
    }
  ]
},
{
  path:"reveal-api",
  children:[
    {
      path:"loopup-ip-address",
      children:[
        {
          path:"attributes/:type",
          component:AttributesComponent,
          pathMatch:"full"
        },
        {
          path:"http-request/:type",
          component:HttpRequestComponent,
          pathMatch:"full"
        },
        {
          path:"http-get-params/:type",
          component:ParamsComponent,
          pathMatch:"full"
        }
      ]
    },
    {
      path:"client-end-point",
      children:[
        {
          path:"http-get-params/:type",
          component:HttpGetParametersComponent,
          pathMatch:"full"
        },
        {
          path:"jsonp-response",
          component:JsonResponseComponent,
          pathMatch:"full"
        },
        {
          path:"javaScript-variable-response",
          component:JavaScriptVariableResponseComponent,
          pathMatch:"full"
        }
      ]
    }
  ]
}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
