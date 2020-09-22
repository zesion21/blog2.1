import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToolMenuComponent } from './map-tool-menu.component';

describe('MapToolMenuComponent', () => {
  let component: MapToolMenuComponent;
  let fixture: ComponentFixture<MapToolMenuComponent>;

  beforeEach(async(() => {
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
