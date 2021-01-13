import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonViewerComponent } from './amazon-viewer.component';

describe('AmazonViewerComponent', () => {
  let component: AmazonViewerComponent;
  let fixture: ComponentFixture<AmazonViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
