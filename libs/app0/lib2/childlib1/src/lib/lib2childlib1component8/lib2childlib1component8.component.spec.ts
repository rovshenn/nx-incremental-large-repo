import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component8Component } from './lib2childlib1component8.component';

describe('Lib2childlib1component8Component', () => {
  let component: Lib2childlib1component8Component;
  let fixture: ComponentFixture<Lib2childlib1component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
