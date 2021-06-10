import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gate-setup',
  templateUrl: './gate-setup.component.html',
  styleUrls: ['./gate-setup.component.scss']
})
export class GateSetupComponent implements OnInit {
  gateFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder
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
      console.log(this.gateFormGroup.value)
    }
  }
}
