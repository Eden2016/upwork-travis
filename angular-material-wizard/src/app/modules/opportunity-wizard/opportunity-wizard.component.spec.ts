import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityWizardComponent } from './opportunity-wizard.component';

describe('OpportunityWizardComponent', () => {
  let component: OpportunityWizardComponent;
  let fixture: ComponentFixture<OpportunityWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
