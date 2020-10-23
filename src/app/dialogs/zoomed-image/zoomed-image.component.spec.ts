import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomedImageComponent } from './zoomed-image.component';

describe('ZoomedImageComponent', () => {
  let component: ZoomedImageComponent;
  let fixture: ComponentFixture<ZoomedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
