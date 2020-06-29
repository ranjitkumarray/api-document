import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainLookupComponent } from './domain-lookup.component';

describe('DomainLookupComponent', () => {
  let component: DomainLookupComponent;
  let fixture: ComponentFixture<DomainLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
