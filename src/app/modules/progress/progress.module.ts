import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressRoutingModule } from './progress-routing.module';
import { CircularComponent } from './circular/circular.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { ProgressComponent } from './progress.component';
import { CanvasCircularComponent } from './canvas-circular/canvas-circular.component';
import { RadialCircularComponent } from './radial-circular/radial-circular.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CircularComponent,
    HorizontalComponent,
    ProgressComponent,
    CanvasCircularComponent,
    RadialCircularComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ProgressRoutingModule
  ]
})
export class ProgressModule { }
