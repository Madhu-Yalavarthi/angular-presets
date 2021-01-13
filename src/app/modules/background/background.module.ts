import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundRoutingModule } from './background-routing.module';
import { BackgroundComponent } from './background.component';
import { BackgroundWallPaperComponent } from './background-wall-paper/background-wall-paper.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [BackgroundComponent, BackgroundWallPaperComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundModule { }
