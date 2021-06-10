import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityWizardComponent } from './opportunity-wizard-page/opportunity-wizard.component';
import { RouterModule } from '@angular/router';
import { OpportunityWizardRoutingModule } from './opportunity-wizard-routing.module';


@NgModule({
  declarations: [OpportunityWizardComponent],
  imports: [
    CommonModule,
    RouterModule,
    OpportunityWizardRoutingModule
  ]
})
export class OpportunityWizardModule { }
