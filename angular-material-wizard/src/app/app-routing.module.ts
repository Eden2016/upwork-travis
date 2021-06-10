import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/stage-wizard', pathMatch: 'full' },
  {
    path: 'stage-wizard',
    loadChildren: () => import('./modules/stage-wizard/stage-wizard.module').then(m => m.StageWizardModule),
  },
  {
    path: 'opportunity-wizard',
    loadChildren: () => import('./modules/opportunity-wizard/opportunity-wizard.module').then(m => m.OpportunityWizardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
