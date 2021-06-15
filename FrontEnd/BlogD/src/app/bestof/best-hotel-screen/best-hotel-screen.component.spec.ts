import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestHotelScreenComponent } from './best-hotel-screen.component';

describe('BestHotelScreenComponent', () => {
  let component: BestHotelScreenComponent;
  let fixture: ComponentFixture<BestHotelScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestHotelScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestHotelScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
