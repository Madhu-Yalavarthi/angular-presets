import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundWallPaperComponent } from './background-wall-paper.component';

describe('BackgroundWallPaperComponent', () => {
  let component: BackgroundWallPaperComponent;
  let fixture: ComponentFixture<BackgroundWallPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundWallPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundWallPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
