import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectorApiComponent } from './prospector-api.component';

describe('ProspectorApiComponent', () => {
  let component: ProspectorApiComponent;
  let fixture: ComponentFixture<ProspectorApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectorApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectorApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
