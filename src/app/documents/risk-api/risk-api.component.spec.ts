import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskApiComponent } from './risk-api.component';

describe('RiskApiComponent', () => {
  let component: RiskApiComponent;
  let fixture: ComponentFixture<RiskApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
