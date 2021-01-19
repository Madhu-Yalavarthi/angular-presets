import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialCircularComponent } from './radial-circular.component';

describe('RadialCircularComponent', () => {
  let component: RadialCircularComponent;
  let fixture: ComponentFixture<RadialCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
