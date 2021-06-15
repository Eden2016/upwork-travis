import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateRuleFormComponent } from './gate-rule-form.component';

describe('GateRuleFormComponent', () => {
  let component: GateRuleFormComponent;
  let fixture: ComponentFixture<GateRuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateRuleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateRuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
