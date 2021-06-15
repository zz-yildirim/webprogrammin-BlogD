import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFoodScreenComponent } from './best-food-screen.component';

describe('BestFoodScreenComponent', () => {
  let component: BestFoodScreenComponent;
  let fixture: ComponentFixture<BestFoodScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestFoodScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestFoodScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
