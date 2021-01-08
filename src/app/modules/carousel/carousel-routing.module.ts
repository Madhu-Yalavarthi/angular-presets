import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicCarouselComponent } from './basic-carousel/basic-carousel.component';
import { CarouselComponent } from './carousel.component';
import { CentralViewCarouselComponent } from './central-view-carousel/central-view-carousel.component';

const routes: Routes = [
  {
    path: 'carousel',
    component: CarouselComponent,
    children: [
      { path: 'basic', component: BasicCarouselComponent },
      { path: 'central', component: CentralViewCarouselComponent },
      { path: '', redirectTo: 'basic', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }
