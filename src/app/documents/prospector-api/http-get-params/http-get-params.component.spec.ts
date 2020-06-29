import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetParamsComponent } from './http-get-params.component';

describe('HttpGetParamsComponent', () => {
  let component: HttpGetParamsComponent;
  let fixture: ComponentFixture<HttpGetParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
