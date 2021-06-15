import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenuSenBurcuScreenComponent } from './benu-sen-burcu-screen.component';

describe('BenuSenBurcuScreenComponent', () => {
  let component: BenuSenBurcuScreenComponent;
  let fixture: ComponentFixture<BenuSenBurcuScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenuSenBurcuScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenuSenBurcuScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
