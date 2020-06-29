import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryApiComponent } from './discovery-api.component';

describe('DiscoveryApiComponent', () => {
  let component: DiscoveryApiComponent;
  let fixture: ComponentFixture<DiscoveryApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
