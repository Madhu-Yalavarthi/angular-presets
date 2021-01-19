import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCircularProggressComponent } from './canvas-circular-proggress.component';

describe('CanvasCircularProggressComponent', () => {
  let component: CanvasCircularProggressComponent;
  let fixture: ComponentFixture<CanvasCircularProggressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasCircularProggressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCircularProggressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
