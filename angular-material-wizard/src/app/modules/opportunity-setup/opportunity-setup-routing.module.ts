import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunitySetupPageComponent } from './opportunity-setup-page/opportunity-setup-page.component';

const routes: Routes = [
  {
    path: '',
    component: OpportunitySetupPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunitySetupRoutingModule { }