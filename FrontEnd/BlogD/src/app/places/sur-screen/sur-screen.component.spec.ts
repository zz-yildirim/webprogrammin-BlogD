import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurScreenComponent } from './sur-screen.component';

describe('SurScreenComponent', () => {
  let component: SurScreenComponent;
  let fixture: ComponentFixture<SurScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
