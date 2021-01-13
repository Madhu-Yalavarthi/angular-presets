import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { BasicCarouselComponent } from './basic-carousel/basic-carousel.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CarouselComponent } from './carousel.component';
import { CentralViewCarouselComponent } from './central-view-carousel/central-view-carousel.component';


@NgModule({
  declarations: [
    CarouselComponent,
    BasicCarouselComponent,
    CentralViewCarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    DirectivesModule,
    CarouselRoutingModule
  ]
})
export class CarouselModule { }
