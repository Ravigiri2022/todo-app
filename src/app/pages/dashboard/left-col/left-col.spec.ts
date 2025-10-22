import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCol } from './left-col';

describe('LeftCol', () => {
  let component: LeftCol;
  let fixture: ComponentFixture<LeftCol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftCol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
