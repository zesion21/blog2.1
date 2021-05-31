import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RightSliderComponent } from './right-slider.component';

describe('RightSliderComponent', () => {
  let component: RightSliderComponent;
  let fixture: ComponentFixture<RightSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
