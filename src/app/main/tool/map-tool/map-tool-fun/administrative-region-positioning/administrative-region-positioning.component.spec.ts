import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdministrativeRegionPositioningComponent } from './administrative-region-positioning.component';

describe('AdministrativeRegionPositioningComponent', () => {
  let component: AdministrativeRegionPositioningComponent;
  let fixture: ComponentFixture<AdministrativeRegionPositioningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeRegionPositioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeRegionPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
