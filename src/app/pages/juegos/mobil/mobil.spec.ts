import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobil } from './mobil';

describe('Mobil', () => {
  let component: Mobil;
  let fixture: ComponentFixture<Mobil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mobil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
