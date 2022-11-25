import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedSuccessfulComponent } from './purchased-successful.component';

describe('PurchasedSuccessfulComponent', () => {
  let component: PurchasedSuccessfulComponent;
  let fixture: ComponentFixture<PurchasedSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
