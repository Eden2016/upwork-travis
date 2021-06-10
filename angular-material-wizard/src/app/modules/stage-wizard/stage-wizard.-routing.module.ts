import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StageWizardComponent } from './stage-wizard-page/stage-wizard.component';

const routes: Routes = [
  {
    path: '',
    component: StageWizardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageWizardRoutingModule { }