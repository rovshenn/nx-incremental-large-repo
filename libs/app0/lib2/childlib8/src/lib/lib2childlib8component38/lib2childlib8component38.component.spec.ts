import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component38Component } from './lib2childlib8component38.component';

describe('Lib2childlib8component38Component', () => {
  let component: Lib2childlib8component38Component;
  let fixture: ComponentFixture<Lib2childlib8component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});