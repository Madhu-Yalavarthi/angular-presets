import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralViewCarouselComponent } from './central-view-carousel.component';

describe('CentralViewCarouselComponent', () => {
  let component: CentralViewCarouselComponent;
  let fixture: ComponentFixture<CentralViewCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralViewCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralViewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
