import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuringWebhooksComponent } from './securing-webhooks.component';

describe('SecuringWebhooksComponent', () => {
  let component: SecuringWebhooksComponent;
  let fixture: ComponentFixture<SecuringWebhooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuringWebhooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuringWebhooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
