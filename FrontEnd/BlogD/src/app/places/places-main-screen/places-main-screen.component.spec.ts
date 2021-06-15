import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesMainScreenComponent } from './places-main-screen.component';

describe('PlacesMainScreenComponent', () => {
  let component: PlacesMainScreenComponent;
  let fixture: ComponentFixture<PlacesMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
