import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component30Component } from './lib1childlib2component30.component';

describe('Lib1childlib2component30Component', () => {
  let component: Lib1childlib2component30Component;
  let fixture: ComponentFixture<Lib1childlib2component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
