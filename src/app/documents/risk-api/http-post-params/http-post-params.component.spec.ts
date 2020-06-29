import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostParamsComponent } from './http-post-params.component';

describe('HttpPostParamsComponent', () => {
  let component: HttpPostParamsComponent;
  let fixture: ComponentFixture<HttpPostParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
