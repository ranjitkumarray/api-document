import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    redirectTo:"api-doc/api-referrance",
    pathMatch:"full"
  },

  { path: 'api-doc', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
