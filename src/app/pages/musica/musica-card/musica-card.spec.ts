import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaCard } from './musica-card';

describe('MusicaCard', () => {
  let component: MusicaCard;
  let fixture: ComponentFixture<MusicaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
