import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetsMenuComponent } from './presets-menu.component';

describe('PresetsMenuComponent', () => {
  let component: PresetsMenuComponent;
  let fixture: ComponentFixture<PresetsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresetsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
