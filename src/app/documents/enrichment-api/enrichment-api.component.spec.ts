import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichmentApiComponent } from './enrichment-api.component';

describe('EnrichmentApiComponent', () => {
  let component: EnrichmentApiComponent;
  let fixture: ComponentFixture<EnrichmentApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichmentApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichmentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
