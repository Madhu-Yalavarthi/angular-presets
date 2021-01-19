import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircularComponent } from './circular/circular.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { ProgressComponent } from './progress.component';

const routes: Routes = [
  {
    path: 'progress',
    component: ProgressComponent,
    children: [
      { path: 'circular', component: CircularComponent },
      { path: 'horizontal', component: HorizontalComponent },
      { path: '', redirectTo: 'circular', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule { }
