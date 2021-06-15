import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HevselBahcesiScreenComponent } from './hevsel-bahcesi-screen.component';

describe('HevselBahcesiScreenComponent', () => {
  let component: HevselBahcesiScreenComponent;
  let fixture: ComponentFixture<HevselBahcesiScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HevselBahcesiScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HevselBahcesiScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
