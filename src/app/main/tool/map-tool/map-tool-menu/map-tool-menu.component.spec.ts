import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapToolMenuComponent } from './map-tool-menu.component';

describe('MapToolMenuComponent', () => {
  let component: MapToolMenuComponent;
  let fixture: ComponentFixture<MapToolMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapToolMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToolMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
