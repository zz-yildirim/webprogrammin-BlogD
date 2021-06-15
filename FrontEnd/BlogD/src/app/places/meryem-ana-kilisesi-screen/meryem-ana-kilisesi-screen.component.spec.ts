import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeryemAnaKilisesiScreenComponent } from './meryem-ana-kilisesi-screen.component';

describe('MeryemAnaKilisesiScreenComponent', () => {
  let component: MeryemAnaKilisesiScreenComponent;
  let fixture: ComponentFixture<MeryemAnaKilisesiScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeryemAnaKilisesiScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeryemAnaKilisesiScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
