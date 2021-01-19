import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialProggressScssComponent } from './radial-proggress-scss.component';

describe('RadialProggressScssComponent', () => {
  let component: RadialProggressScssComponent;
  let fixture: ComponentFixture<RadialProggressScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialProggressScssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialProggressScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
