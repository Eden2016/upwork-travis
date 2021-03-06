import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityWizardComponent } from './opportunity-wizard-page/opportunity-wizard.component';
import { RouterModule } from '@angular/router';
import { OpportunityWizardRoutingModule } from './opportunity-wizard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { FieldAddFormComponent } from './opportunity-wizard-page/field-set-up/field-add-form/field-add-form.component';
import { FieldListComponent } from './opportunity-wizard-page/field-set-up/field-list/field-list.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { ActionFormComponent } from './opportunity-wizard-page/action-set-up/action-form/action-form.component';
import { ActionListComponent } from './opportunity-wizard-page/action-set-up/action-list/action-list.component';
import { GateRuleFormComponent } from './opportunity-wizard-page/gate-rules/gate-rule-form/gate-rule-form.component';
import { GateRuleListComponent } from './opportunity-wizard-page/gate-rules/gate-rule-list/gate-rule-list.component';
import { GateSetupComponent } from './opportunity-wizard-page/stage-settings/gate-setup/gate-setup.component';
import { GateListComponent } from './opportunity-wizard-page/stage-settings/gate-list/gate-list.component';
import { EditFieldDialogComponent } from './opportunity-wizard-page/field-set-up/field-list/edit-field-dialog/edit-field-dialog.component';

@NgModule({
  declarations: [
    OpportunityWizardComponent,
    FieldAddFormComponent,
    FieldListComponent,
    ActionFormComponent,
    ActionListComponent,
    GateRuleFormComponent,
    GateRuleListComponent,
    GateSetupComponent,
    GateListComponent,
    EditFieldDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    OpportunityWizardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class OpportunityWizardModule { }
