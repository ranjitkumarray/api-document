import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSideEndPointComponent } from './client-side-end-point.component';

describe('ClientSideEndPointComponent', () => {
  let component: ClientSideEndPointComponent;
  let fixture: ComponentFixture<ClientSideEndPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSideEndPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSideEndPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
