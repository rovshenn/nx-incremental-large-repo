import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component31Component } from './lib4childlib9component31.component';

describe('Lib4childlib9component31Component', () => {
  let component: Lib4childlib9component31Component;
  let fixture: ComponentFixture<Lib4childlib9component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
