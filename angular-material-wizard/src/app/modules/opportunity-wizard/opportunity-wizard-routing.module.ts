import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityWizardComponent } from './opportunity-wizard-page/opportunity-wizard.component';

const routes: Routes = [
  {
    path: '',
    component: OpportunityWizardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityWizardRoutingModule { }