import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaziKoskuScreenComponent } from './gazi-kosku-screen.component';

describe('GaziKoskuScreenComponent', () => {
  let component: GaziKoskuScreenComponent;
  let fixture: ComponentFixture<GaziKoskuScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaziKoskuScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaziKoskuScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
