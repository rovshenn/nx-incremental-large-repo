import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component47Component } from './lib3childlib2component47.component';

describe('Lib3childlib2component47Component', () => {
  let component: Lib3childlib2component47Component;
  let fixture: ComponentFixture<Lib3childlib2component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
