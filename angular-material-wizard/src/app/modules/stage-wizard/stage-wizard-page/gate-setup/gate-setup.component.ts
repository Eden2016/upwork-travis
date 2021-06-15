import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { staticOptions } from 'src/static-data/static-options';
import * as fromApp from '../../../../store/app.reducer';
import * as gateActions from '../store/gate.actions'

@Component({
  selector: 'app-gate-setup',
  templateUrl: './gate-setup.component.html',
  styleUrls: ['./gate-setup.component.scss']
})
export class GateSetupComponent implements OnInit {

  gateForm: FormGroup;

  stageList = staticOptions.stageList;
  colorList = staticOptions.colors;
  stageControl = new FormControl('', Validators.required);
  colorControl = new FormControl('', Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.gateForm = this.formBuilder.group({
      gateName: ['', Validators.required],
      stage: this.stageControl,
      color: this.colorControl
    });
  }

  addGate(): void {
    if (this.gateForm.valid) {
      this.store.dispatch(gateActions.addGate({ gate: this.gateForm.value }));
    }
  }
}
