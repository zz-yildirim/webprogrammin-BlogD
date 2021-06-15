import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestofMainScreenComponent } from './bestof-main-screen.component';

describe('BestofMainScreenComponent', () => {
  let component: BestofMainScreenComponent;
  let fixture: ComponentFixture<BestofMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestofMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestofMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
