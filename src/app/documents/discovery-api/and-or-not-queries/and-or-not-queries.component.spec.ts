import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndOrNotQueriesComponent } from './and-or-not-queries.component';

describe('AndOrNotQueriesComponent', () => {
  let component: AndOrNotQueriesComponent;
  let fixture: ComponentFixture<AndOrNotQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndOrNotQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndOrNotQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
