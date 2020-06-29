import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameToDomainApiComponent } from './name-to-domain-api.component';

describe('NameToDomainApiComponent', () => {
  let component: NameToDomainApiComponent;
  let fixture: ComponentFixture<NameToDomainApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameToDomainApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameToDomainApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
