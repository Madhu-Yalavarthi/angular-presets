import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsCheckComponent } from './cors-check.component';

describe('CorsCheckComponent', () => {
  let component: CorsCheckComponent;
  let fixture: ComponentFixture<CorsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
