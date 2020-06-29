import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealApiComponent } from './reveal-api.component';

describe('RevealApiComponent', () => {
  let component: RevealApiComponent;
  let fixture: ComponentFixture<RevealApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevealApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
