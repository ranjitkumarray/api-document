import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsePostBodyComponent } from './response-post-body.component';

describe('ResponsePostBodyComponent', () => {
  let component: ResponsePostBodyComponent;
  let fixture: ComponentFixture<ResponsePostBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsePostBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsePostBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
