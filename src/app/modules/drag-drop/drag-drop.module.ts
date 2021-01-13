import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropComponent } from './drag-drop.component';
import { CardDropComponent } from './card-drop/card-drop.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [DragDropComponent, CardDropComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    MaterialModule,
    DragDropRoutingModule
  ]
})
export class DragDropModule { }
