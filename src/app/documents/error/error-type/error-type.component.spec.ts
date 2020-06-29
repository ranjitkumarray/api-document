import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTypeComponent } from './error-type.component';

describe('ErrorTypeComponent', () => {
  let component: ErrorTypeComponent;
  let fixture: ComponentFixture<ErrorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
