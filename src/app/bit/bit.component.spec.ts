import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BITComponent } from './bit.component';

describe('BITComponent', () => {
  let component: BITComponent;
  let fixture: ComponentFixture<BITComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BITComponent]
    });
    fixture = TestBed.createComponent(BITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
