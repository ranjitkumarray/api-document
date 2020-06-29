import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePromptComponent } from './console-prompt.component';

describe('ConsolePromptComponent', () => {
  let component: ConsolePromptComponent;
  let fixture: ComponentFixture<ConsolePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
