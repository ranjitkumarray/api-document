import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyApiComponent } from './company-api.component';

describe('CompanyApiComponent', () => {
  let component: CompanyApiComponent;
  let fixture: ComponentFixture<CompanyApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
