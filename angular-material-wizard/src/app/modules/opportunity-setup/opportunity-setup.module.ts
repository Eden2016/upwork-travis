import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OpportunitySetupPageComponent } from './opportunity-setup-page/opportunity-setup-page.component';
import { OpportunityListComponent } from './opportunity-setup-page/opportunity-list/opportunity-list.component';
import { OpportunitySetupFormComponent } from './opportunity-setup-page/opportunity-setup-form/opportunity-setup-form.component';
import { RouterModule } from '@angular/router';
import { OpportunitySetupRoutingModule } from './opportunity-setup-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OpportunitySetupFormComponent,
    OpportunitySetupPageComponent,
    OpportunityListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    OpportunitySetupRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class OpportunitySetupModule { }
