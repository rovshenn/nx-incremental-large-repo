import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component27Component } from './lib4childlib2component27.component';

describe('Lib4childlib2component27Component', () => {
  let component: Lib4childlib2component27Component;
  let fixture: ComponentFixture<Lib4childlib2component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
