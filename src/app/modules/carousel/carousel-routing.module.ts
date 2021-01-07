import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicCarouselComponent } from './basic-carousel/basic-carousel.component';
import { CarouselComponent } from './carousel.component';

const routes: Routes = [
  {
    path: 'carousel',
    component: CarouselComponent,
    children: [
      { path: 'basic-carousel', component: BasicCarouselComponent },
      { path: '', redirectTo: 'basic-carousel', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }
