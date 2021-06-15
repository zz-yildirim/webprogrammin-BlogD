import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMuseumScreenComponent } from './best-museum-screen.component';

describe('BestMuseumScreenComponent', () => {
  let component: BestMuseumScreenComponent;
  let fixture: ComponentFixture<BestMuseumScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestMuseumScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestMuseumScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
