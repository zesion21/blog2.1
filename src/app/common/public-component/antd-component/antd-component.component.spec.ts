import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdComponentComponent } from './antd-component.component';

describe('AntdComponentComponent', () => {
  let component: AntdComponentComponent;
  let fixture: ComponentFixture<AntdComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
