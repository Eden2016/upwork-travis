import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySetupPageComponent } from './opportunity-setup-page.component';

describe('OpportunitySetupPageComponent', () => {
  let component: OpportunitySetupPageComponent;
  let fixture: ComponentFixture<OpportunitySetupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitySetupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySetupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
