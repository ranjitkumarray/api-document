import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateLimitComponent } from './rate-limit.component';

describe('RateLimitComponent', () => {
  let component: RateLimitComponent;
  let fixture: ComponentFixture<RateLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
