import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEngComponent } from './comp-eng.component';

describe('CompEngComponent', () => {
  let component: CompEngComponent;
  let fixture: ComponentFixture<CompEngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompEngComponent]
    });
    fixture = TestBed.createComponent(CompEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
