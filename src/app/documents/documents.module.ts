import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { ApiReferenceComponent } from './api-reference/api-reference.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ConsolePromptComponent } from './console-prompt/console-prompt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ErrorTypeComponent } from './error/error-type/error-type.component';
import { HttpStatusCodeComponent } from './error/http-status-code/http-status-code.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialsModule } from '../materials/materials.module';
import { PrettyPrintPipe } from './csv-for-doc/pretty-print.pipe';
import { NodeComponent } from './console-prompt/node/node.component';
import { PthonComponent } from './console-prompt/pthon/pthon.component';
import { RubyComponent } from './console-prompt/ruby/ruby.component';
import { ShellComponent } from './console-prompt/shell/shell.component';
import { RateLimitComponent } from './rate-limit/rate-limit.component';
import { VersioningComponent } from './versioning/versioning.component';
import { WebhooksComponent } from './webhooks/webhooks.component';
import { ResponsePostBodyComponent } from './webhooks/response-post-body/response-post-body.component';
import { SecuringWebhooksComponent } from './webhooks/securing-webhooks/securing-webhooks.component';
import { StreamingComponent } from './streaming/streaming.component';
import { AuthComponent } from './auth/auth.component';
import { EnrichmentApiComponent } from './enrichment-api/enrichment-api.component';
import { DiscoveryApiComponent } from './discovery-api/discovery-api.component';
import { ProspectorApiComponent } from './prospector-api/prospector-api.component';
import { RiskApiComponent } from './risk-api/risk-api.component';
import { RevealApiComponent } from './reveal-api/reveal-api.component';
import { NameToDomainApiComponent } from './name-to-domain-api/name-to-domain-api.component';
import { AutocompleteApiComponent } from './autocomplete-api/autocomplete-api.component';
import { LogoApiComponent } from './logo-api/logo-api.component';
import { HttpRequestComponent } from './prospector-api/http-request/http-request.component';
import { HttpGetParamsComponent } from './prospector-api/http-get-params/http-get-params.component';
import { DefaultImageComponent } from './logo-api/default-image/default-image.component';
import { SpecifyingYourOwnLogoComponent } from './logo-api/specifying-your-own-logo/specifying-your-own-logo.component';
import { ParamsComponent } from './discovery-api/params/params.component';
import { LookupIpAddressComponent } from './reveal-api/lookup-ip-address/lookup-ip-address.component';
import { AttributesComponent } from './enrichment-api/attributes/attributes.component';
import { HttpGetParametersComponent } from './reveal-api/http-get-parameters/http-get-parameters.component';
import { ClientSideEndPointComponent } from './reveal-api/client-side-end-point/client-side-end-point.component';
import { JsonResponseComponent } from './reveal-api/json-response/json-response.component';
import { JavaScriptVariableResponseComponent } from './reveal-api/java-script-variable-response/java-script-variable-response.component';
import { RequestTokenComponent } from './auth/request-token/request-token.component';
import { QueryParamsComponent } from './auth/query-params/query-params.component';
import { AccessTokenComponent } from './auth/access-token/access-token.component';
import { CombinedApiComponent } from './enrichment-api/combined-api/combined-api.component';
import { PersonApiComponent } from './enrichment-api/person-api/person-api.component';
import { EmailLookupComponent } from './enrichment-api/email-lookup/email-lookup.component';
import { SubscribeComponent } from './enrichment-api/subscribe/subscribe.component';
import { FlaggingComponent } from './enrichment-api/flagging/flagging.component';
import { CompanyApiComponent } from './enrichment-api/company-api/company-api.component';
import { DomainLookupComponent } from './enrichment-api/domain-lookup/domain-lookup.component';
import { RequestComponent } from './discovery-api/request/request.component';
import { UrlComponent } from './discovery-api/url/url.component';
import { ResponseCodeComponent } from './discovery-api/response-code/response-code.component';
import { PaginationComponent } from './discovery-api/pagination/pagination.component';
import { SortingComponent } from './discovery-api/sorting/sorting.component';
import { QueriesComponent } from './discovery-api/queries/queries.component';
import { DataTypeComponent } from './discovery-api/data-type/data-type.component';
import { FieldsComponent } from './discovery-api/fields/fields.component';
import { AndOrNotQueriesComponent } from './discovery-api/and-or-not-queries/and-or-not-queries.component';
import { TechQueriesComponent } from './discovery-api/tech-queries/tech-queries.component';
import { ResponseTypeComponent } from './prospector-api/response-type/response-type.component';
import { ResponseBodyComponent } from './prospector-api/response-body/response-body.component';
import { PersonAttributesComponent } from './prospector-api/person-attributes/person-attributes.component';
import { JavascriptLibraryComponent } from './risk-api/javascript-library/javascript-library.component';
import { SafeHtmlPipe } from './csv-for-doc/innerWarn';
import { PersonSearchComponent } from './prospector-api/person-search/person-search.component';
import { HttpPostParamsComponent } from './risk-api/http-post-params/http-post-params.component';

@NgModule({
  declarations: [
    DocumentsComponent, 
    ApiReferenceComponent, 
    AuthenticationComponent, 
    ConsolePromptComponent, 
    DashboardComponent, 
    ErrorComponent, 
    ErrorTypeComponent, 
    HttpStatusCodeComponent, 
    SideNavComponent,
    PrettyPrintPipe,
    SafeHtmlPipe,
    NodeComponent,
    PthonComponent,
    RubyComponent,
    ShellComponent,
    RateLimitComponent,
    VersioningComponent,
    WebhooksComponent,
    ResponsePostBodyComponent,
    SecuringWebhooksComponent,
    StreamingComponent,
    AuthComponent,
    EnrichmentApiComponent,
    DiscoveryApiComponent,
    ProspectorApiComponent,
    RiskApiComponent,
    RevealApiComponent,
    NameToDomainApiComponent,
    AutocompleteApiComponent,
    LogoApiComponent,
    HttpRequestComponent,
    HttpGetParamsComponent,
    DefaultImageComponent,
    SpecifyingYourOwnLogoComponent,
    ParamsComponent,
    LookupIpAddressComponent,
    AttributesComponent,
    HttpGetParametersComponent,
    ClientSideEndPointComponent,
    JsonResponseComponent,
    JavaScriptVariableResponseComponent,
    RequestTokenComponent,
    QueryParamsComponent,
    AccessTokenComponent,
    CombinedApiComponent,
    PersonApiComponent,
    SubscribeComponent,
    EmailLookupComponent,
    FlaggingComponent,
    CompanyApiComponent,
    DomainLookupComponent,
    RequestComponent,
    UrlComponent,
    ResponseCodeComponent,
    PaginationComponent,
    SortingComponent,
    QueriesComponent,
    DataTypeComponent,
    FieldsComponent,
    AndOrNotQueriesComponent,
    TechQueriesComponent,
    ResponseTypeComponent,
    ResponseBodyComponent,
    PersonAttributesComponent,
    JavascriptLibraryComponent,
    PersonSearchComponent,
    HttpPostParamsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MaterialsModule
  ]
})
export class DocumentsModule { }
