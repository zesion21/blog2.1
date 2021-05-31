import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapToolComponent } from './map-tool.component';

describe('MapToolComponent', () => {
  let component: MapToolComponent;
  let fixture: ComponentFixture<MapToolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
