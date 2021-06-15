import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCafesScreenComponent } from './best-cafes-screen.component';

describe('BestCafesScreenComponent', () => {
  let component: BestCafesScreenComponent;
  let fixture: ComponentFixture<BestCafesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestCafesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCafesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
