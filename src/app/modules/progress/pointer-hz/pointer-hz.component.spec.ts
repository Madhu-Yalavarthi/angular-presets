import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerHzComponent } from './pointer-hz.component';

describe('PointerHzComponent', () => {
  let component: PointerHzComponent;
  let fixture: ComponentFixture<PointerHzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerHzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerHzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
