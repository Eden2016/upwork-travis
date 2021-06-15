import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateRuleListComponent } from './gate-rule-list.component';

describe('GateRuleListComponent', () => {
  let component: GateRuleListComponent;
  let fixture: ComponentFixture<GateRuleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateRuleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateRuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
