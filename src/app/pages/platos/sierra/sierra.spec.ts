import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sierra } from './sierra';

describe('Sierra', () => {
  let component: Sierra;
  let fixture: ComponentFixture<Sierra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sierra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sierra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
