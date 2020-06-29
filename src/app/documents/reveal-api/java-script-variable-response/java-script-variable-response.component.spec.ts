import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptVariableResponseComponent } from './java-script-variable-response.component';

describe('JavaScriptVariableResponseComponent', () => {
  let component: JavaScriptVariableResponseComponent;
  let fixture: ComponentFixture<JavaScriptVariableResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptVariableResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptVariableResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
