import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib7component16Component } from './lib2childlib7component16.component';

describe('Lib2childlib7component16Component', () => {
  let component: Lib2childlib7component16Component;
  let fixture: ComponentFixture<Lib2childlib7component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
