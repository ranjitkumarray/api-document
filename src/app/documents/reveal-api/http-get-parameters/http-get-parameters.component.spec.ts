import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetParametersComponent } from './http-get-parameters.component';

describe('HttpGetParametersComponent', () => {
  let component: HttpGetParametersComponent;
  let fixture: ComponentFixture<HttpGetParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
