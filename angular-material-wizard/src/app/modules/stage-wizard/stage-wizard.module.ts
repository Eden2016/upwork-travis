import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageWizardComponent } from './stage-wizard-page/stage-wizard.component';
import { RouterModule } from '@angular/router';
import { StageWizardRoutingModule } from './stage-wizard.-routing.module';


@NgModule({
  declarations: [StageWizardComponent],
  imports: [
    CommonModule,
    RouterModule,
    StageWizardRoutingModule
  ]
})
export class StageWizardModule { }
