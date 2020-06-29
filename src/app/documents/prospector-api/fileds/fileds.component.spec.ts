import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledsComponent } from './fileds.component';

describe('FiledsComponent', () => {
  let component: FiledsComponent;
  let fixture: ComponentFixture<FiledsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiledsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
