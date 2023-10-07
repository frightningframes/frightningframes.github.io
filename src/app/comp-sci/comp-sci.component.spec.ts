import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSciComponent } from './comp-sci.component';

describe('CompSciComponent', () => {
  let component: CompSciComponent;
  let fixture: ComponentFixture<CompSciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSciComponent]
    });
    fixture = TestBed.createComponent(CompSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
