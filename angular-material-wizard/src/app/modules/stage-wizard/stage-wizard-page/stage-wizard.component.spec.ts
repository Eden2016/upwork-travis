import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageWizardComponent } from './stage-wizard.component';

describe('StageWizardComponent', () => {
  let component: StageWizardComponent;
  let fixture: ComponentFixture<StageWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
