import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToolFunComponent } from './map-tool-fun.component';

describe('MapToolFunComponent', () => {
  let component: MapToolFunComponent;
  let fixture: ComponentFixture<MapToolFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapToolFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToolFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
