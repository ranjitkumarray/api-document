import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoApiComponent } from './logo-api.component';

describe('LogoApiComponent', () => {
  let component: LogoApiComponent;
  let fixture: ComponentFixture<LogoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
