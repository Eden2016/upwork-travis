import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityWizardComponent } from './opportunity-wizard-page/opportunity-wizard.component';
import { RouterModule } from '@angular/router';
import { OpportunityWizardRoutingModule } from './opportunity-wizard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { FieldAddFormComponent } from './opportunity-wizard-page/field-set-up/field-add-form/field-add-form.component';
import { FieldListComponent } from './opportunity-wizard-page/field-set-up/field-list/field-list.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { ActionFormComponent } from './opportunity-wizard-page/action-set-up/action-form/action-form.component';
import { ActionListComponent } from './opportunity-wizard-page/action-set-up/action-list/action-list.component';

@NgModule({
  declarations: [
    OpportunityWizardComponent,
    FieldAddFormComponent,
    FieldListComponent,
    ActionFormComponent,
    ActionListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    OpportunityWizardRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class OpportunityWizardModule { }
