import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6component41Component } from './lib0childlib6component41.component';

describe('Lib0childlib6component41Component', () => {
  let component: Lib0childlib6component41Component;
  let fixture: ComponentFixture<Lib0childlib6component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
