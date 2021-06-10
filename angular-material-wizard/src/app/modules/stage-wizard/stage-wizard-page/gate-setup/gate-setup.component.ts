import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import * as gateActions from '../store/gate.actions'

@Component({
  selector: 'app-gate-setup',
  templateUrl: './gate-setup.component.html',
  styleUrls: ['./gate-setup.component.scss']
})
export class GateSetupComponent implements OnInit {
  gateFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.gateFormGroup = this.formBuilder.group({
      gateName: ['', Validators.required],
      stage: ['', Validators.required],
      color: ['', Validators.required]
    })
  }

  addGate(): void {
    if (this.gateFormGroup.valid) {
      this.store.dispatch(gateActions.addGate({ gate: this.gateFormGroup.value }));
    }
  }
}
