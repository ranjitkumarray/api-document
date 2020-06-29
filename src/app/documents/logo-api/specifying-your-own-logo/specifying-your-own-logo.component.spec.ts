import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifyingYourOwnLogoComponent } from './specifying-your-own-logo.component';

describe('SpecifyingYourOwnLogoComponent', () => {
  let component: SpecifyingYourOwnLogoComponent;
  let fixture: ComponentFixture<SpecifyingYourOwnLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecifyingYourOwnLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifyingYourOwnLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
