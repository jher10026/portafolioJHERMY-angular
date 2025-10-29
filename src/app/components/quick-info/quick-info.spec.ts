import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickInfo } from './quick-info';

describe('QuickInfo', () => {
  let component: QuickInfo;
  let fixture: ComponentFixture<QuickInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
