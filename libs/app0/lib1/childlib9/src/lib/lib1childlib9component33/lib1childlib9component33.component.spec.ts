import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component33Component } from './lib1childlib9component33.component';

describe('Lib1childlib9component33Component', () => {
  let component: Lib1childlib9component33Component;
  let fixture: ComponentFixture<Lib1childlib9component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
