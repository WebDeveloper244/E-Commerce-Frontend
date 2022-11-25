import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCartComponent } from './wild-cart.component';

describe('WildCartComponent', () => {
  let component: WildCartComponent;
  let fixture: ComponentFixture<WildCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
