import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PthonComponent } from './pthon.component';

describe('PthonComponent', () => {
  let component: PthonComponent;
  let fixture: ComponentFixture<PthonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PthonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PthonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
