import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedFailedComponent } from './purchased-failed.component';

describe('PurchasedFailedComponent', () => {
  let component: PurchasedFailedComponent;
  let fixture: ComponentFixture<PurchasedFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedFailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
