import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptLibraryComponent } from './javascript-library.component';

describe('JavascriptLibraryComponent', () => {
  let component: JavascriptLibraryComponent;
  let fixture: ComponentFixture<JavascriptLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
