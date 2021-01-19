import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCircularComponent } from './basic-circular.component';

describe('BasicCircularComponent', () => {
  let component: BasicCircularComponent;
  let fixture: ComponentFixture<BasicCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
