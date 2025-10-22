import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCol } from './right-col';

describe('RightCol', () => {
  let component: RightCol;
  let fixture: ComponentFixture<RightCol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightCol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
