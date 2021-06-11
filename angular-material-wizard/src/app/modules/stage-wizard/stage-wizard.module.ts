import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StageWizardRoutingModule } from './stage-wizard.-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StageWizardComponent } from './stage-wizard-page/stage-wizard.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { GateSetupComponent } from './stage-wizard-page/gate-setup/gate-setup.component';
import { GateListComponent } from './stage-wizard-page/gate-list/gate-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromGates from './stage-wizard-page/store/gate.reducer'


@NgModule({
  declarations: [StageWizardComponent, GateSetupComponent, GateListComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('gates', fromGates.gateReducer),
    StageWizardRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    NgxMatColorPickerModule
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class StageWizardModule { }
