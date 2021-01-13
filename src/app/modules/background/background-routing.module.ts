import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundWallPaperComponent } from './background-wall-paper/background-wall-paper.component';
import { BackgroundComponent } from './background.component';

const routes: Routes = [
  {
    path: 'background',
    component: BackgroundComponent,
    children: [
      { path: 'floaters', component: BackgroundWallPaperComponent },
      { path: '', redirectTo: 'floaters', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackgroundRoutingModule { }
