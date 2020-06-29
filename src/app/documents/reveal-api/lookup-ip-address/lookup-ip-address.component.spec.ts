import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupIpAddressComponent } from './lookup-ip-address.component';

describe('LookupIpAddressComponent', () => {
  let component: LookupIpAddressComponent;
  let fixture: ComponentFixture<LookupIpAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupIpAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupIpAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
