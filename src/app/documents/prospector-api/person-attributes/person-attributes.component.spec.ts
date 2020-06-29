import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAttributesComponent } from './person-attributes.component';

describe('PersonAttributesComponent', () => {
  let component: PersonAttributesComponent;
  let fixture: ComponentFixture<PersonAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
