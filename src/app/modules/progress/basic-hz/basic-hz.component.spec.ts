import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHzComponent } from './basic-hz.component';

describe('BasicHzComponent', () => {
  let component: BasicHzComponent;
  let fixture: ComponentFixture<BasicHzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicHzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
