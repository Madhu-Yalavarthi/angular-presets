import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesginViewersRoutingModule } from './desgin-viewers-routing.module';
import { DesginViewersComponent } from './desgin-viewers.component';
import { RadialProggressScssComponent } from './radial-proggress-scss/radial-proggress-scss.component';
import { CanvasCircularProggressComponent } from './canvas-circular-proggress/canvas-circular-proggress.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DesginViewersComponent, RadialProggressScssComponent, CanvasCircularProggressComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DesginViewersRoutingModule
  ]
})
export class DesginViewersModule { }
