import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BScITComponent } from './bsc-it.component';

describe('BScITComponent', () => {
  let component: BScITComponent;
  let fixture: ComponentFixture<BScITComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BScITComponent]
    });
    fixture = TestBed.createComponent(BScITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
