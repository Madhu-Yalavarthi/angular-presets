import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginViewersComponent } from './desgin-viewers.component';

describe('DesginViewersComponent', () => {
  let component: DesginViewersComponent;
  let fixture: ComponentFixture<DesginViewersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesginViewersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesginViewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
