import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Costa } from './costa';

describe('Costa', () => {
  let component: Costa;
  let fixture: ComponentFixture<Costa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Costa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Costa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
