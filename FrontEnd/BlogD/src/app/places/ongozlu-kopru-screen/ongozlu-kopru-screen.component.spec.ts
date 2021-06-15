import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngozluKopruScreenComponent } from './ongozlu-kopru-screen.component';

describe('OngozluKopruScreenComponent', () => {
  let component: OngozluKopruScreenComponent;
  let fixture: ComponentFixture<OngozluKopruScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngozluKopruScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngozluKopruScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
