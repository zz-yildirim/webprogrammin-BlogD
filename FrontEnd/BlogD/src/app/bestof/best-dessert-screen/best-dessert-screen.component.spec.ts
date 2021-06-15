import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDessertScreenComponent } from './best-dessert-screen.component';

describe('BestDessertScreenComponent', () => {
  let component: BestDessertScreenComponent;
  let fixture: ComponentFixture<BestDessertScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDessertScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDessertScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
