import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySetupFormComponent } from './opportunity-setup-form.component';

describe('OpportunitySetupFormComponent', () => {
  let component: OpportunitySetupFormComponent;
  let fixture: ComponentFixture<OpportunitySetupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitySetupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
