import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechQueriesComponent } from './tech-queries.component';

describe('TechQueriesComponent', () => {
  let component: TechQueriesComponent;
  let fixture: ComponentFixture<TechQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
