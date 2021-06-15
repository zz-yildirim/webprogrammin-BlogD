import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DortAyakliMinareScreenComponent } from './dort-ayakli-minare-screen.component';

describe('DortAyakliMinareScreenComponent', () => {
  let component: DortAyakliMinareScreenComponent;
  let fixture: ComponentFixture<DortAyakliMinareScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DortAyakliMinareScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DortAyakliMinareScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
