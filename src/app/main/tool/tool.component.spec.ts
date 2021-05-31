import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToolComponent } from './tool.component';

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
