import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCircularComponent } from './canvas-circular.component';

describe('CanvasCircularComponent', () => {
  let component: CanvasCircularComponent;
  let fixture: ComponentFixture<CanvasCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
