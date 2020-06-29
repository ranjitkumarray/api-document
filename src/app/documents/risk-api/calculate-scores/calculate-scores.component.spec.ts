import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateScoresComponent } from './calculate-scores.component';

describe('CalculateScoresComponent', () => {
  let component: CalculateScoresComponent;
  let fixture: ComponentFixture<CalculateScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
