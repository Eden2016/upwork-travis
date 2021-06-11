import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAddFormComponent } from './field-add-form.component';

describe('FieldAddFormComponent', () => {
  let component: FieldAddFormComponent;
  let fixture: ComponentFixture<FieldAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
