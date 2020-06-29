import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpStatusCodeComponent } from './http-status-code.component';

describe('HttpStatusCodeComponent', () => {
  let component: HttpStatusCodeComponent;
  let fixture: ComponentFixture<HttpStatusCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpStatusCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpStatusCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
