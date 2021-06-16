import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateSetupComponent } from './gate-setup.component';

describe('GateSetupComponent', () => {
  let component: GateSetupComponent;
  let fixture: ComponentFixture<GateSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
